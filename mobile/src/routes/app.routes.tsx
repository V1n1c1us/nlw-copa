import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlusCircle, Strategy, SoccerBall } from "phosphor-react-native";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import NewPool from "../screens/NewPool";
import Pools from "../screens/Pools";
import CupStadiums from "../screens/CupStadiums";
import FindPool from "../screens/FindPool";
import Details from "../screens/Details";

const { Navigator, Screen } = createBottomTabNavigator();
const AppRouter = () => {
  const { colors, sizes } = useTheme();
  const size = sizes[7];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[500],
        tabBarStyle: {
          position: "absolute",
          height: sizes[22],
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
        tabBarItemStyle: {
          position: "relative",
          top: Platform.OS === "android" ? -10 : 0,
        },
      }}
    >
      <Screen
        name="newPool"
        component={NewPool}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={size} />,
          tabBarLabel: "Novo bolão",
        }}
      />
      <Screen
        name="pools"
        component={Pools}
        options={{
          tabBarIcon: ({ color }) => <Strategy color={color} size={size} />,
          tabBarLabel: "Meus bolões",
        }}
      />
      <Screen
        name="cupStadiums"
        component={CupStadiums}
        options={{
          tabBarIcon: ({ color }) => <SoccerBall color={color} size={size} />,
          tabBarLabel: "Estádios",
        }}
      />
      <Screen
        name="findPool"
        component={FindPool}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="details"
        component={Details}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
};

export default AppRouter;
