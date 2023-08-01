import tr from './tr.json';
import en from './en.json';
import de from './de.json';

export const dictionaryList = { en, tr, de };

export const languageOptions = {
  en: { country: 'En', flag: require('../icons/uk.png') },
  tr: { country: 'Dk', flag: require('../icons/turk.png') },
  de: { country: 'De', flag: require('../icons/germany.png') },
};
