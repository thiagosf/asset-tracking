import I18n from 'i18n-js'
import pt from './pt-BR'

const normalizeTranslate = {
  'pt_BR': 'pt_BR'
}

I18n.translations = {
  'pt_BR': pt
}

I18n.defaultLocale = 'pt_BR'

const getLanguageByDevice = () => {
  return 'pt_BR'
}

const setLanguageToI18n = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language]
  const supportedLanguage = I18n.translations.hasOwnProperty(translateNormalize)

  if (supportedLanguage) {
    setLocale(translateNormalize)
  }
}

export const translate = (key, options = {}) => I18n.t(key, options)
export const setLocale = locale => { I18n.locale = locale }

setLanguageToI18n()
