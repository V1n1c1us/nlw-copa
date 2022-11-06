import { VStack, Heading, useToast } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { api } from "../api/api";
import { useNavigation } from "@react-navigation/native";

const FindPool = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const { navigate } = useNavigation();
  const toast = useToast();

  const handleJoinPool = async () => {
    try {
      setIsLoading(true);

      if (!code.trim()) {
        toast.show({
          title: "Informe o código do bolão",
          placement: "top",
          bgColor: "red.500",
        });
      }

      await api.post("/pools/join", {
        code,
      });

      toast.show({
        title: "Voce entrou no bolão com sucesso",
        placement: "top",
        bgColor: "green.500",
      });

      navigate("pools");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      if (error.response?.data?.message === "Pool not found.") {
        toast.show({
          title: "Bolão não encontrado",
          placement: "top",
          bgColor: "red.500",
        });
      }

      if (error.response?.data?.message === "You already joined this poll.") {
        toast.show({
          title: "Voce já está nesse bolão",
          placement: "top",
          bgColor: "red.500",
        });
      }
    }
  };
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontre um bolão através de{"\n"}seu código único
        </Heading>

        <Input
          mb={2}
          placeholder="Qual o código do bolão?"
          onChangeText={setCode}
          autoCapitalize="characters"
        />

        <Button
          title="BUSCAR BOLÃO"
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  );
};

export default FindPool;
