import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Alert } from "react-native";

import { useFirebase } from "../../../hooks";
import { useAuth } from "../../../contexts";
import { useAudio } from "../hooks";
import { GetCards, SaveCard } from "../graphql/lessonQueries.graphql";
import { cleanupCards } from "../utils/cleanupCards";
import { ILessonCardData, ICard } from "../interfaces/card.interface";

interface LessonCardVars {
  uid: string;
  lessonId: number;
}

interface SaveCardVars {
  uid: string;
  cardId: number;
}

export const useLessonCards = (lessonId: number) => {
  const { uid } = useAuth();
  const { error, data } = useQuery<ILessonCardData, LessonCardVars>(GetCards, {
    variables: { uid: uid, lessonId: lessonId },
  });
  const { imageUrls, audioUrls, getMedia } = useFirebase();
  const { audio, getAudio } = useAudio();
  const [cards, setCards] = useState<ICard[]>();
  const [setSavedCard, result] = useMutation<ICard, SaveCardVars>(SaveCard);

  if (error) {
    throw new Error('Failed fetching lesson cards from the API');
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
      const cards: ICard[] = cleanupCards(data.lesson_cards, imageUrls, audio);
      setCards(cards);
    }
  }, [imageUrls, audio]);

  useEffect(() => {
    if (result.data) {
      Alert.alert("Success", 'Card saved successfully!');
    }
  }, [result]);

  const saveCard = (cardId: number) => {
    setSavedCard({
      variables: {
        uid: uid,
        cardId: cardId
      },
    });
  };

  return { cards, saveCard };

};