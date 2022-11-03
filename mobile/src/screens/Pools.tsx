import { Icon, ScrollView, VStack } from "native-base";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MagnifyingGlass } from "phosphor-react-native";
import { PoolCard } from "../components/PoolCard";

const data = {
  id: "1",
  code: "QWEX",
  title: "Bolão do Totó",
  ownerId: "1",
  createdAt: "20/10/2022",
  owner: {
    name: "Vinícius",
  },
  participants: [
    {
      id: "1",
      user: {
        name: "Vinícius",
        avatarUrl: "https://avatars.githubusercontent.com/u/1993081?v=4",
      },
    },
    {
      id: "2",
      user: {
        name: "Vinícius",
        avatarUrl: "https://avatars.githubusercontent.com/u/1993081?v=4",
      },
    },
  ],
  _count: {
    participants: 1,
  },
};

const Pools = () => {
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Meus bolões" />

      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={MagnifyingGlass} name="search" color="black" size="md" />
          }
        />
      </VStack>
      <ScrollView>
        <VStack p={4}>
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
          <PoolCard data={data} />
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Pools;
