import { useState, useEffect } from "react";

import { useQueryHandler, useMutationHandler, useFirebase } from "../../../hooks";
import { SaveCard } from "../graphql/lessonQueries.graphql";
import { cleanupCards } from "../utils/cleanupCards";

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
      const cards = cleanupCards(queryData, images, audio);
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