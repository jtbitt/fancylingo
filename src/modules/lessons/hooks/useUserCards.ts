import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { useFirebase } from "../../../hooks";
import { useAuth } from "../../../contexts";
import { useAudio } from "../hooks";
import { GetUserCards } from "../graphql/lessonQueries.graphql";
import { cleanupCards } from "../utils/cleanupCards";
import { IUserCardData, ICard } from "../interfaces/card.interface";

interface UserCardVars {
  uid: string;
}

export const useUserCards = () => {
  const { uid } = useAuth();
  const { error, data, refetch } = useQuery<IUserCardData, UserCardVars>(GetUserCards, {
    variables: { uid: uid },
  });
  const { imageUrls, audioUrls, getMedia } = useFirebase();
  const { audio, getAudio } = useAudio();
  const [cards, setCards] = useState<ICard[]>();

  if (error) {
    throw new Error('Failed fetching user cards from the API');
  }

  useEffect(() => {
    if (data) {
      getMedia("card_images", "image");
      getMedia("card_audio", "audio");
    }
  }, [data]);

  useEffect(() => {
    if (audioUrls) {
      getAudio(audioUrls);
    }
  }, [audioUrls]);


  useEffect(() => {
    if (data && imageUrls && audio) {
      const cards: ICard[] = cleanupCards(data.user_cards, imageUrls, audio);
      setCards(cards);
    }
  }, [imageUrls, audio]);

  return { cards, refetch };

};