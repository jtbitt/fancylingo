import { useState, useEffect } from "react";

import { useQueryHandler, useMutationHandler, useFirebase } from "../../../hooks";
import { useAudio } from "../hooks";
import { SaveCard } from "../graphql/lessonQueries.graphql";
import { cleanupCards } from "../utils/cleanupCards";

export const useCards = (query: any, lessonId: number) => {
  const { queryData } = useQueryHandler(query, { lessonId: lessonId });
  const [cards, setCards] = useState<any[]>();
  const { getMedia, imageUrls, audioUrls } = useFirebase();
  const { getAudio, audio } = useAudio();
  const { mutationData, setMutation } = useMutationHandler(SaveCard);

  useEffect(() => {
    if (queryData) {
      getMedia("card_images", "image");
      getMedia("card_audio", "audio");
    }
  }, [queryData]);

  useEffect(() => {
    if (audioUrls) {
      getAudio(audioUrls);
    }
  }, [audioUrls]);


  useEffect(() => {
    if (imageUrls && audio) {
      const cards = cleanupCards(queryData, imageUrls, audio);
      setCards(cards);
    }
  }, [imageUrls, audio]);

  const saveCard = (cardId: number) => {
    setMutation({
      cardId: cardId,
    });
  };

  return { cards, saveCard };

};