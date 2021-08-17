import { useState, useEffect } from "react";

export const useCards = (data: any) => {
  const [cards, setCards] = useState<any[]>();

  useEffect(() => {
    if (data) {
      const cards = [...data].map((card: any) => {
        let cardObj = {...card.card};
        cardObj['card_id'] = card.card_id;
        return cardObj;
      });
      setCards(cards);
    }
  }, [data]);

  return { cards };

};