import localizationMessages from "~/assets/localization.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: localizationMessages,
}));
