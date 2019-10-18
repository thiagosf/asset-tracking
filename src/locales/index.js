import I18n from 'i18n-js'
import fecha from 'fecha'
import * as timeago from 'timeago.js'
import numeral from 'numeral'
import pt from './pt-BR'

const normalizeTranslate = {
  'pt_BR': 'pt_BR'
}

I18n.translations = {
  'pt_BR': pt
}

I18n.defaultLocale = 'pt_BR'

const translate = (key, options = {}) => I18n.t(key, options)

const setLocale = locale => { I18n.locale = locale }

const getLanguageByDevice = () => {
  return I18n.defaultLocale
}

const setLanguageToI18n = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language]
  const supportedLanguage = I18n.translations.hasOwnProperty(translateNormalize)

  if (supportedLanguage) {
    setLocale(translateNormalize)
  }
}

setLanguageToI18n()

fecha.i18n = {
  ...pt.date,
  DoFn (D) {
    return D + [ 'th', 'st', 'nd', 'rd' ][ D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10 ]
  }
}

timeago.register(I18n.defaultLocale, (number, index, totalSec) => {
  return [...pt.timeago][index]
})

numeral.register('locale', I18n.defaultLocale, {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'm',
    million: 'M',
    billion: 'B',
    trillion: 'T'
  },
  ordinal (number) {
    return number === 1 ? 'er' : 'ème'
  },
  currency: {
    symbol: 'R$'
  }
})

numeral.locale(I18n.defaultLocale)

export {
  translate,
  setLocale
}
