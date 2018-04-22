import I18n from 'react-native-i18n';
import en from './locales/en';
import ru from './locales/ru';
import sv from './locales/sv';
import lt from './locales/lt';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ru,
  sv,
  lt,
};

export default I18n;
