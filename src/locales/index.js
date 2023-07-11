import { uz } from "./uz";
import { ru } from "./ru";
import { en } from "./en";
import { LANGUANGE } from "../tools/constant";

export const getLanguage = () => {
  return localStorage.getItem(LANGUANGE);
};

export const getText = (word) => {
  return getLanguage() === "ru"
    ? ru[word]
    : getLanguage() === "uz"
    ? uz[word]
    : en[word];
};
