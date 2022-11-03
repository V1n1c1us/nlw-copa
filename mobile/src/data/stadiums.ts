const INITIAL_REGION = {
  latitude: 25.283250315342357,
  longitude: 51.52812798929025,
  latitudeDelta: 0.3,
  longitudeDelta: 0.3,
};

const STADIUMS = [
  {
    name: "Estádio Al Bayt",
    description:
      "Percebeu o estilo de “tenda” do estádio? Para os escritórios AS + P Albert Speer + Partner e Dar Al-Handasah, é uma referência às Bayt al sha'ar, como são chamadas as tendas utilizadas pelos povos nômades do Catar. Esse será o palco de abertura da Copa do Mundo e tem capacityacidade para até 60 mil torcedores.",
    coords: {
      latitude: 25.652469989919094,
      longitude: 51.48783049737253,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1412819969.jpg?quality=70&strip=info&w=1024",
    city: "Doha",
    capacity: "40 mil pessoas",
    totalGames: "8 jogos",
  },
  {
    name: "Estádio Al Janoub",
    description:
      "Desenhado pela arquiteta Zaha Hadid em conjunto com o escritório AECOM, essa obra homenageia os “dhow”, tradicionais barcos de pesca de pérolas, que são considerados símbolo do país. Oferece espaço para acomodar até 40 mil torcedores no jogos.",
    coords: {
      latitude: 25.15990672614142,
      longitude: 51.57431089715987,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1404716072.jpg?quality=70&strip=info&w=1024",
    city: "Al Rayyan",
    capacity: "40 mil pessoas",
    totalGames: "7 jogos",
  },
  {
    name: "Estádio Ahmad Bin Ali",
    description:
      "Essa obra à beira do deserto substitui o antigo estádio Al Rayyan Sports Club – time que chegou a ter o astro colombiano James Rodríguez. Com desenho assinado pelos escritórios BDP Pattern, Ramboll e AECOM, a fachada representa “a família, o deserto, a flora e fauna nativas, assim como o comércio local e internacional”. Atualmente recebe até 40 mil pessoas, mas, após a Copa do Mundo, diminuirá pela metade para se adequar ao uso local.",
    coords: {
      latitude: 25.32960278645795,
      longitude: 51.342447154832996,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1404712124.jpg?resize=654,436",
    city: "Al Rayyan",
    capacity: "40 mil pessoas",
    totalGames: "7 jogos",
  },
  {
    name: "Estádio Al Thumama",
    description:
      "Com formato que lembra a “gahfiya”, chapéu tradicional da região que representa a transição para a vida adulta dos homens, o estádio tem assinatura do estúdio Ibrahim Jaidah Architects & Engineers e pode receber até 40 mil pessoas. Mas essa capacityacidade será reduzida pela metade após a competição – para dar lugar a um hotel – e os bancos serão doados a países em desenvolvimento.",
    coords: {
      latitude: 25.235893252481745,
      longitude: 51.53254148213414,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1404714812.jpg",
    city: "Doha",
    capacity: "40 mil pessoas",
    totalGames: "8 jogos",
  },
  {
    name: "Estádio Education City",
    description:
      "Esse projeto do escritório Fenwick Iribarren Architects tem desde formas que lembram diamantes na fachada até sistema de refrigeração para os torcedores. Com foco em inovação, a obra também tem áreas verdes no interior e acessibilidade planejada. Dos 40 mil lugares, o estádio diminuirá para 25 mil após a competição e doará todos os bancos excedentes.",
    coords: {
      latitude: 25.31080778051747,
      longitude: 51.424422168327524,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1404712924.jpg",
    city: "Al Wakrah",
    capacity: "40 mil pessoas",
    totalGames: "7 jogos",
  },
  {
    name: "Estádio Khalifa International",
    description:
      "Construído em 1976, esse é o único estádio que já havia sido construído antes da Copa do Mundo. Mas, para receber a competição, o empreendimento foi completamente reformado e ganhou dois arcos que representam “o abraço dos torcedores”. Também fazem parte desse complexo shopping, centro aquático e hotel. Para os jogos, a capacityacidade do estádio é de 40 mil torcedores.",
    coords: {
      latitude: 25.263699680220196,
      longitude: 51.448092763987,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1079956776.jpg?quality=70&strip=info&w=1024",
    city: "Doha",
    capacity: "40 mil pessoas",
    totalGames: "8 jogos",
  },
  {
    name: "Estádio 974",
    description:
      "Feito em homenagem ao comercio internacional e à navegação, esse estádio traz 974 contêneires na fachada – número que também remete ao código de discagem do Catar. Mais impressionante é que toda a obra do Fenwick Iribarren Architects, que poderá receber até 40 mil torcedores durante a Copa do Mundo, será desmontado. É a primeira vez que isso acontece na competição.",
    coords: {
      latitude: 25.28889638321823,
      longitude: 51.56663809716208,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1404712966.jpg",
    city: "Ras Abu Aboud",
    capacity: "40 mil pessoas",
    totalGames: "7 jogos",
  },
  {
    name: "Estádio Lusail",
    description:
      "Palco para a final da Copa do Mundo, esse estádio pode receber até 80 mil torcedores e é o maior deste edição. Com projeto do estúdio Foster + Partners e Populous, a obra traz representações da cultura árabe, como tigelas, vasos, peças de arte e embarcações como parte da decoração. Após a competição, será transformado em centro comunitário.",
    coords: {
      latitude: 25.420748483798576,
      longitude: 51.49047302599964,
    },
    uri: "https://classic.exame.com/wp-content/uploads/2022/10/GettyImages-1404718087.jpg",
    city: "Lusail",
    capacity: "80 mil pessoas",
    totalGames: "10 jogos",
  },
];

export { STADIUMS, INITIAL_REGION };
