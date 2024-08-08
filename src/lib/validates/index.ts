/**
 *
 * @param cardNumber string
 * @returns boolean
 *
 */

import { cardsRegex } from '@/utils/card-regex';

export const validateCardNumber = (cardNumber: string) => {
  let sum: number = 0;
  let alternate: boolean = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit: number = parseInt(cardNumber[i], 10);

    if (alternate) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    alternate = !alternate;
  }

  return sum % 10 === 0;
};

/**
 *
 * @param cardNumber string
 * @returns string
 *
 */

export const cardFlagIdentification = (cardNumber: string) => {
  const cardValidate = cardNumber.replace(/[^0-9]+/g, '');

  const cardType =
    Object.entries(cardsRegex).find(([_, regex]) =>
      regex.test(cardValidate),
    )?.[0] || null;

  return cardType;
};
