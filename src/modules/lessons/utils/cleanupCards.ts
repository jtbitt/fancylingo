import { IMediaObject, IAudioObject } from "../interfaces/media.interface";

export const cleanupCards = (cards: any, images: IMediaObject[], audio: IAudioObject[]) => {
  return [...cards].map((card: any) => {
    let cardObj = {...card.card};
    cardObj['image_url'] = images.find(({ name }: any) => name === cardObj.image_url).url;
    cardObj['audio'] = audio.find(({ name }: any) => name === cardObj.audio_url).file.sound;
    cardObj['card_id'] = card.card_id;
    return cardObj;
  });
};
