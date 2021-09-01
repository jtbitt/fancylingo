import { IMediaObject } from "../interfaces/media.interface";

export const cleanupCards = (cards: any, images: IMediaObject[], audio: IMediaObject[]) => {
  return [...cards].map((card: any) => {
    let cardObj = {...card.card};
    cardObj['image_url'] = images.find(({ name }) => name === cardObj.image_url).url;
    cardObj['audio_url'] = audio.find(({ name }) => name === cardObj.audio_url).url;
    cardObj['card_id'] = card.card_id;
    return cardObj;
  });
};
