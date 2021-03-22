const images = {
    Airport: require("../assets/airport.png"),
    ColombianSlang: require('../assets/colombian-slang.png'),
    Directions: require('../assets/directions.png'),
    Home: require('../assets/home.png'),
    MexicanSlang: require('../assets/mexican-slang.png'),
    Restaurant: require('../assets/restaurant.png'),
    SpanishSlang: require('../assets/spanish-slang.png'),
  };
  
  export const getProductImage = (image: any) => images[image];
  