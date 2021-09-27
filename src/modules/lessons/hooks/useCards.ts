import { useState, useEffect } from "react";

import { useQueryHandler, useMutationHandler, useFirebase } from "../../../hooks";
import { useAudio } from "../hooks";
import { SaveCard } from "../graphql/lessonQueries.graphql";
import { cleanupCards } from "../utils/cleanupCards";

export const useCards = (query: any, lessonId: number) => {
  const { queryData, refetch } = useQueryHandler(query, { lessonId: lessonId });
  const { imageUrls, audioUrls, getMedia } = useFirebase();
  const { audio, getAudio } = useAudio();
  const cardSave = useMutationHandler(SaveCard);
  const [cards, setCards] = useState<any[]>();

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
    cardSave.setMutation(
      { cardId: cardId }
    );
  };

  return { cards, refetch, saveCard };

};