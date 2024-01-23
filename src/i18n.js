import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from 'react-i18next';



i18n.use(LanguageDetector).use(initReactI18next).init({
        debug: true,
        lng: "en",
        resources: {
            en:{
                translation: {
                    home: "Home",
                    about: "About",
                    features:"Features",
                    contactUs: "Contact Us",

                    //hero@
                    topText1: "20%",
                    topText2: "DISCOUNT FOR",
                    topText3: "1 MONTH ACCOUNT",
                },
            },
            fr:{
                translation: {
                    home: " Page d'accueil",
                    about: "À Propos",
                    features:"Caractéristiques",
                    contactUs: "Nous Contacter",

                     //hero@
                     topText1: "20%",
                    topText2: "REDUCTION POUR",
                    topText3: "1 MOIS COMPTE",
                }
            },
            it:{
                translation: {
                    home: "Pagina Principale",
                    about: "Riguardo A",
                    features:"Caratteristiche",
                    contactUs: "Contattaci",

                    //hero@
                    topText1: "20%",
                    topText2: "SCONTO PER",
                    topText3: "1 MESE ACCOUNT",
                }
            }
        }
    })