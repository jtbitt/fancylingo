import { useState, useEffect } from "react";

import { useFirebase } from "../../../hooks";

export const useCards = (data: any, imagePath: string, audioPath: string) => {
  const [cards, setCards] = useState<any[]>();
  const { getMedia, images, audio } = useFirebase();

  useEffect(() => {
    if (data) {
      getMedia(imagePath, "image");
      getMedia(audioPath, "audio");
    }
  }, [data]);

  useEffect(() => {
    if (images && audio) {
      const cards = [...data].map((card: any) => {
        let cardObj = {...card.card};
        cardObj['image_url'] = images.find(({ name }) => name === cardObj.image_url).url;
        cardObj['audio_url'] = audio.find(({ name }) => name === cardObj.audio_url).url;
        return cardObj;
      });
      setCards(cards);
    }
  }, [images, audio]);

  return { cards };

};