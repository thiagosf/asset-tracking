import { translate } from '../locales'

export default {
  buildErrors: (model, error) => {
    let output = {}
    let allErrors = []
    error.cause.forEach(item => {
      if (!output[item.target]) {
        output[item.target] = []
      }
      const message = translate(`validations.${model}.${item.target}.${item.rule.name}`)
      output[item.target].push(message)
      allErrors.push(message)
    })
    return {
      success: false,
      message: allErrors.join(', '),
      errors: output
    }
  }
}
