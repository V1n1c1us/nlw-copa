import { Icon, FlatList, useToast, VStack } from "native-base";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { MagnifyingGlass } from "phosphor-react-native";
import { PoolCard } from "../components/PoolCard";
import { Loading } from "../components/Loading";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { api } from "../api/api";
import { useCallback, useState } from "react";
import { EmptyPoolList } from "../components/EmptyPoolList";

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

interface Pools {
  id: string;
  code: string;
  title: string;
  ownerId: string;
  createdAt: string;
  owner: {
    name: string;
  };
  participants: {
    id: string;
    user: {
      name: string;
      avatarUrl: string;
    };
  }[];
  _count: {
    participants: number;
  };
}

const Pools = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [poolsData, setPoolsData] = useState<Pools[]>([]);

  const toast = useToast();
  const { navigate } = useNavigation();

  const fetchPools = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/pools");
      setPoolsData(res.data.polls);
    } catch (error) {
      console.log(error);
      toast.show({
        title: "Não carregar os bolões",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPools();
    }, [])
  );

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
          onPress={() => navigate("findPool")}
        />
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={poolsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PoolCard
              data={item}
              onPress={() => navigate("details", { id: item.id })}
            />
          )}
          ListEmptyComponent={() => <EmptyPoolList />}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ pb: 10 }}
          px={5}
        />
      )}
    </VStack>
  );
};

export default Pools;
