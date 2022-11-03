import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  const { signIn } = useAuth();

  return (
    <Center flex={1} bg="gray.900" p={7}>
      <Logo width={212} height={40} />

      <Button
        title="ENTRAR COM O GOOGLE"
        leftIcon={<Icon as={Fontisto} name="google" size="md" color="white" />}
        type="SECONDARY"
        mt={12}
        onPress={signIn}
      />

      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {"/n"}do seu e-mail para criação
        de sua conta.
      </Text>
    </Center>
  );
};
export default SignIn;