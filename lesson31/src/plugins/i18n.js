import uz from "../data/lang/uz.js";
import ru from "../data/lang/ru.js";
import en from "../data/lang/en.js";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "uz",
  messages: {
    uz,
    ru,
    en,
  },
});

export default i18n;
