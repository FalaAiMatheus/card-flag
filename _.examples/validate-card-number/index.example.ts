// Importe a função validateCardNumber
import { validateCardNumber } from '../../src/lib/validates/index';

// Adicione um número de cartão
const cardNumberExample = '****************';

// Utilize uma variavel para validar de qual cartão ele pertence
const validateCardNumberExample = validateCardNumber(cardNumberExample);

console.log(validateCardNumberExample); // Retorna se o cartão é valido ou não
