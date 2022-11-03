import { VStack } from "native-base";
import { Header } from "../components/Header";
import CupStadiumsMapView from "../components/CupStadiumsMapView";

const CupStadiums = () => {
  return (
    <VStack>
      <Header title="Estádios da Copa" showBackButton />
      <CupStadiumsMapView />
    </VStack>
  );
};

export default CupStadiums;
