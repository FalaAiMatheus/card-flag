import { cardsRegex } from '../regex';
import { ValidateCardType } from '../types';

export function validateCardNumber({ cardNumber }: ValidateCardType) {
  const cardValidate = cardNumber.replace(/[^0-9]+/g, '');

  const cardType =
    Object.entries(cardsRegex).find(([_, regex]) =>
      regex.test(cardValidate),
    )?.[0] || null;

  return { cardType };
}
