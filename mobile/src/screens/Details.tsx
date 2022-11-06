import { HStack, useToast, VStack } from "native-base";
import { Share } from "react-native";
import { Header } from "../components/Header";
import { useRoute } from "@react-navigation/native";
import { Loading } from "../components/Loading";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { PooCardPros } from "../components/PoolCard";
import { PoolHeader } from "../components/PoolHeader";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";
import { Option } from "../components/Option";
import { Guesses } from "../components/Guesses";

interface RouteParams {
  id: string;
}

type OptionsSelected = "guesses" | "ranking";

const Details = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [optionSelected, setOptionSelected] =
    useState<OptionsSelected>("guesses");
  const [poolDetails, setPoolDetails] = useState<PooCardPros>(
    {} as PooCardPros
  );

  const toast = useToast();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const fetchPoolDetails = async () => {
    try {
      setIsLoading(true);

      const response = await api.get(`/pools/${id}`);

      setPoolDetails(response.data.poll);
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Não foi possível carregar os detalhes do bolão",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeShare = async () => {
    await Share.share({
      message: poolDetails.code,
    });
  };

  useEffect(() => {
    fetchPoolDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bg="gray.900">
      <Header
        title={poolDetails.title}
        showBackButton
        showShareButton
        onShare={handleCodeShare}
      />

      {poolDetails._count?.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />

          <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
            <Option
              title="Seus palpites"
              isSelected={optionSelected === "guesses"}
              onPress={() => setOptionSelected("guesses")}
            />
            <Option
              title="Ranking do grupo"
              isSelected={optionSelected === "ranking"}
              onPress={() => setOptionSelected("ranking")}
            />
          </HStack>

          <Guesses poolId={poolDetails.id} code={poolDetails.code} />
        </VStack>
      ) : (
        <EmptyMyPoolList code={poolDetails.code} />
      )}
    </VStack>
  );
};

export default Details;
