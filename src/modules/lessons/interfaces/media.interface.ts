import { Audio, AVPlaybackStatus } from "expo-av";

export interface IMediaObject {
  name: string;
  url: string;

}

export interface IAudioObject {
  name: string;
  file: {
    sound: Audio.Sound;
    status: AVPlaybackStatus;
  };
}