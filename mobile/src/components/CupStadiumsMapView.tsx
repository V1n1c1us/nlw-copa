import MapView, { Marker } from "react-native-maps";
import { INITIAL_REGION, STADIUMS } from "../data/stadiums";
import CupStadiumDetail from "./CupStadiumDetail";

import { StyleSheet, Dimensions } from "react-native";

const stadiums_mapper = STADIUMS.map((item, index) => (
  <Marker
    key={index}
    coordinate={item.coords}
    title={item.name}
    description={item.description}
  >
    <CupStadiumDetail
      name={item.name}
      uri={item.uri}
      description={item.description}
      capacity={item.capacity}
      totalGames={item.totalGames}
      city={item.city}
    />
  </Marker>
));

const CupStadiumsMapView = () => {
  return (
    <MapView style={styles.map} initialRegion={INITIAL_REGION}>
      {stadiums_mapper}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default CupStadiumsMapView;
