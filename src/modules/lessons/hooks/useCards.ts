import { useState, useEffect } from "react";

import { useFirebase } from "../../../hooks";

export const useCards = (data: any, imagePath: string) => {
  const [cards, setCards] = useState<any[]>();
  const { getImages, images } = useFirebase();

  useEffect(() => {
    if (data) {
      getImages(imagePath);
    }
  }, [data]);

  useEffect(() => {
    if (images) {
      const cards = [...data].map((card: any) => {
        let cardObj = {...card.card};
        const imageUrl = images.find(({ name }) => name === cardObj.image_url).url;
        cardObj['image_url'] = imageUrl;
        return cardObj;
      });
      setCards(cards);
    }
  }, [images]);

  return { cards };

};