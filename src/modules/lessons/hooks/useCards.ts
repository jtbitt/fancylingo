import { useState, useEffect } from "react";

import { useQueryHandler, useFirebase } from "../../../hooks";
import { GetCards } from "../graphql/lessonQueries.graphql";

export const useCards = (query: any, lessonId: any) => {
  const { queryData } = useQueryHandler(GetCards, { lessonId: 1 });
  const [cards, setCards] = useState<any[]>();
  const [userCards, setUserCards] = useState<any[]>();
  const { getMedia, images, audio } = useFirebase();

  useEffect(() => {
    if (queryData) {
      getMedia("card_images", "image");
      getMedia("card_audio", "audio");
    }
  }, [queryData]);

  useEffect(() => {
    if (images && audio && queryData) {
      const cards = [...queryData].map((card: any) => {
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