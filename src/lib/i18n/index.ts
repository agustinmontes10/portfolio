import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './resources';

i18n
    .use(LanguageDetector) // detecta automáticamente el idioma del navegador o cookie/localStorage
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false // React ya escapa por defecto
        }
    });

export default i18n;
