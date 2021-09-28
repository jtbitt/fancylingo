import { IMediaObject, IAudioObject } from "../interfaces/media.interface";
import { ICardDataObject } from "../interfaces/card.interface";

export const cleanupCards = (cards: ICardDataObject[], images: IMediaObject[], audio: IAudioObject[]) => {
  return [...cards].map((card: ICardDataObject) => {
    let cardObj = {...card.card};
    cardObj['image_url'] = images.find(({ name }: { name: string }) => name === cardObj.image_url).url;
    cardObj['audio'] = audio.find(({ name }: { name: string }) => name === cardObj.audio_url).file.sound;
    return cardObj;
  });
};
''