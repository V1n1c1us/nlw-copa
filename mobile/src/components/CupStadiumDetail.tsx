import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "native-base";
import { Callout } from "react-native-maps";
import { MapPin, SoccerBall, UsersFour } from "phosphor-react-native";

interface CupStadiumDetailProps {
  name: string;
  uri: string;
  description: string;
  city: string;
  totalGames: string;
  capacity: string;
}

const CupStadiumDetail = ({
  uri,
  description,
  name,
  city,
  totalGames,
  capacity,
}: CupStadiumDetailProps) => (
  <>
    <Image
      size={50}
      borderRadius={100}
      borderWidth={3}
      borderColor="rose.900"
      source={{
        uri,
      }}
      alt={name}
    />

    <Callout tooltip={false}>
      <Box width={300} p={1} rounded={10}>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri,
            }}
            alt={name}
            mb={4}
          />
        </AspectRatio>

        <Text>{description}</Text>

        <VStack mt={4}>
          <HStack flexShrink={1} space={2} alignItems="center">
            <Icon as={MapPin} />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              <Text>{city}</Text>
            </Text>
          </HStack>
          <HStack flexShrink={1} space={2} alignItems="center">
            <Icon as={SoccerBall} />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              <Text>{totalGames}</Text>
            </Text>
          </HStack>
          <HStack flexShrink={1} space={2} alignItems="center">
            <Icon as={UsersFour} />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              <Text>{capacity}</Text>
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Callout>
  </>
);

export default CupStadiumDetail;
