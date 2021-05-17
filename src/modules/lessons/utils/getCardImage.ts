const images = {
  Avion: require("../assets/avion.png"),
  Pasarela: require("../assets/pasarela.png"),
  Pasajero: require("../assets/pasajero.png"),
  Ala: require("../assets/ala.png"),
  Escaleras: require("../assets/escaleras.png")
};

export const getCardImage = (image: any) => images[image];
  