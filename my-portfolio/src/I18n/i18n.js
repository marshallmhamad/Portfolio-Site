const KUR = require("../I18n/languages/kur");
const EN = require("../I18n/languages/en");

export const translation = (language, key) => {
  if (language === "en") {
    return EN[key];
  } else if (language === "kur") {
    return KUR[key];
  }
};
