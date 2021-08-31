import { useState, useEffect } from "react";

import { useQueryHandler, useMutationHandler, useFirebase } from "../../../hooks";
import { SaveCard } from "../graphql/lessonQueries.graphql";

export const useCards = (query: any, lessonId: number) => {
  const { queryData } = useQueryHandler(query, { lessonId: lessonId });
  const [cards, setCards] = useState<any[]>();
  const { getMedia, images, audio } = useFirebase();
  const { mutationData, setMutation } = useMutationHandler(SaveCard);

  useEffect(() => {
    if (queryData) {
      getMedia("card_images", "image");
      getMedia("card_audio", "audio");
    }
  }, [queryData]);

  useEffect(() => {
    if (images && audio && queryData) {
      const cards = queryData.map((card: any) => {
        let cardObj = {...card.card};
        cardObj['image_url'] = images.find(({ name }) => name === cardObj.image_url).url;
        cardObj['audio_url'] = audio.find(({ name }) => name === cardObj.audio_url).url;
        cardObj['card_id'] = card.card_id;
        return cardObj;
      });
      setCards(cards);

    }
  }, [images, audio]);

  const saveCard = (cardId: number) => {
    setMutation({
      cardId: cardId,
    });
  };

  return { cards, saveCard };

};