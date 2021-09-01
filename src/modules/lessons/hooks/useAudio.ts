import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export const useAudio = (url: string) => {
  const [audio, setAudio] = useState<any>();

  useEffect(() => {
    const getSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: false }
      );
      setAudio(sound);

      return sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined;
    };
    getSound();
  }, [url]);

  return { audio };

};