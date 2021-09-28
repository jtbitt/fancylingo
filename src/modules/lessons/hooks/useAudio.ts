import { useState } from "react";
import { Audio } from "expo-av";

import { IMediaObject, IAudioObject } from "../interfaces/media.interface";

export const useAudio = () => {
  const [audio, setAudio] = useState<IAudioObject[]>();

  const getAudio = async (audioUrls: IMediaObject[]) => {
    let audioPending = audioUrls.map(async (audio: IMediaObject) => {
      return { 
        name: audio.name, 
        file: await Audio.Sound.createAsync(
          { uri: audio.url },
          { shouldPlay: false }
        )
      };
    });
    let audioLoading = Promise.all(audioPending);
    let audioLoaded = await audioLoading;
    setAudio(audioLoaded);

    // return audioLoaded ? audioLoaded.forEach((audio: any) => {
    //   audio.file.sound.unloadAsync();
    // }) : undefined;
  };

  return { getAudio, audio };

};