"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  validateCardNumber: () => validateCardNumber
});
module.exports = __toCommonJS(app_exports);

// src/regex/index.ts
var cardsRegex = {
  amex: /^3[47][0-9]{13}/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
  elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
  hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}/,
  mastercard: /^5[1-5][0-9]{14}/,
  visa: /^4[0-9]{12}(?:[0-9]{3})/
};

// src/app.ts
function validateCardNumber({ cardNumber }) {
  const cardValidate = cardNumber.replace(/[^0-9]+/g, "");
  const cardType = Object.entries(cardsRegex).find(
    ([_, regex]) => regex.test(cardValidate)
  )?.[0] || null;
  return { cardType };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  validateCardNumber
});
