import v8n from 'v8n'
import validatorUtils from './validation_utils'

export default {
  emailRules: () => v8n().not.null().validEmail(),
  passwordRules: () => v8n().not.null().string().minLength(6),

  create (data) {
    return v8n()
      .schema({
        name: v8n().not.null().string().minLength(2),
        email: this.emailRules(),
        password: this.passwordRules()
      })
      .testAsync(data)
      .then(result => ({ success: true }))
      .catch(e => validatorUtils.buildErrors('users', e))
  },

  edit (data) {
    return v8n()
      .schema({
        name: v8n().not.null().string().minLength(2),
        email: this.emailRules(),
        password: this.passwordRules()
      })
      .testAsync(data)
      .then(result => ({ success: true }))
      .catch(e => validatorUtils.buildErrors('users', e))
  },

  login (data) {
    return v8n()
      .schema({
        email: this.emailRules(),
        password: this.passwordRules()
      })
      .testAsync(data)
      .then(result => ({ success: true }))
      .catch(e => validatorUtils.buildErrors('users', e))
  },

  passwordRecovery (data) {
    return v8n()
      .schema({
        email: this.emailRules()
      })
      .testAsync(data)
      .then(result => ({ success: true }))
      .catch(e => validatorUtils.buildErrors('users', e))
  },

  changePassword (data) {
    return v8n()
      .schema({
        password: this.passwordRules(),
        password_confirmation: this.passwordRules().equal(data.password),
      })
      .testAsync(data)
      .then(result => ({ success: true }))
      .catch(e => validatorUtils.buildErrors('users', e))
  }
}
