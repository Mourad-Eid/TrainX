import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import ar from "./ar.json";
import { I18nManager } from "react-native";
import RNRestart from 'react-native-restart';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  fallbackLng: I18nManager.isRTL? 'ar': 'en',
  
  compatibilityJSON: "v3", // By default React Native projects does not support Intl
});

export const toggleLanguage = () => {
    i18n
    .changeLanguage(i18n.language === "ar" ? "en" : "ar")
    .then(() => {
      I18nManager.forceRTL(i18n.language === "ar");
      RNRestart.restart();
    });
}
export default i18n;
