import { Audio } from "expo-av";

export interface IMediaObject {
  name: string;
  url: string;

}

export interface IAudioObject {
  name: string;
  file: Audio.Sound;
}