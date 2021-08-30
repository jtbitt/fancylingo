import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Button,
  IconButton,
  Colors,
  ActivityIndicator,
  Title,
  Subheading,
} from "react-native-paper";
import { Audio } from "expo-av";

import { Play } from "./Play";
import { Card } from "../interfaces/lesson.interface";

interface IDefaultFlashCardProps {
  card: Card;
  onAnswer: (answer: boolean) => void;
}

export const FlashCard = ({ card, onAnswer, onSaved }: any) => {
  const [frontChecked, setFrontChecked] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<any>();

  useEffect(() => {
    const getSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: card.audio_url },
        { shouldPlay: false }
      );
      setCurrentAudio(sound);

      return sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined;
    };
    getSound();
  }, [card]);

  const onFrontChecked = () => {
    setFrontChecked(true);
  };

  const onAnswerSelected = (answer: boolean) => {
    onAnswer(answer);
    setFrontChecked(false);
  };

  const onPlayAudio = async () => {
    await currentAudio.replayAsync();
  };

  const onCardSaved = () => {
    onSaved();
  };

  return (
    <View>
      <View style={[styles.card, styles.shadow]}>
        <Image style={styles.image} source={{ uri: card.image_url }} />
        <View style={styles.content}>
          {!frontChecked && <Title style={styles.title}>¿Qué es esto?</Title>}
          {frontChecked && (
            <View style={styles.backInfo}>
              <Title style={styles.title}>{card.word}</Title>
              <Subheading style={styles.ipa}>{card.ipa}</Subheading>
              <View style={styles.cardOptions}>
                <Play size={35} onPress={onPlayAudio} style={styles.play} />
                <IconButton
                  style={styles.bookmark}
                  icon="bookmark-outline"
                  color={Colors.red500}
                  size={40}
                  onPress={onCardSaved}
                />
              </View>
            </View>
          )}
        </View>
      </View>
      {!frontChecked && (
        <Button
          style={[styles.button, { width: 200 }]}
          labelStyle={styles.buttonText}
          mode="contained"
          color="#fc5a5e"
          onPress={onFrontChecked}
        >
          SEE ANSWER
        </Button>
      )}
      {frontChecked && (
        <View style={styles.backButtons}>
          <Button
            style={[styles.button, { width: 165 }]}
            labelStyle={styles.buttonText}
            mode="contained"
            color="#fc5a5e"
            onPress={() => onAnswerSelected(false)}
          >
            REPEAT
          </Button>
          <Button
            style={[styles.button, { width: 165 }]}
            labelStyle={styles.buttonText}
            mode="contained"
            color="#fc5a5e"
            onPress={() => onAnswerSelected(true)}
          >
            NEXT
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: "#FFF6D7",
  },
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    resizeMode: "cover",
    height: 275,
    width: "100%",
    borderRadius: 15,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    height: 175,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 30,
    color: "black",
  },
  backInfo: {
    alignItems: "center",
  },
  ipa: {
    fontSize: 20,
    color: "black",
  },
  cardOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  play: {
    marginLeft: 12,
    backgroundColor: "#fc5a5e",
  },
  bookmark: {
    width: 40,
    height: 50,
  },
  button: {
    alignSelf: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
