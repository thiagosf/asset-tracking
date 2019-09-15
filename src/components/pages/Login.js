import React, { Component } from 'react'
import { AppLayout } from '../templates'
import { FormControl, ButtonSpinner, Transition } from '../atoms'
import { AccountLinks } from '../molecules'
import { translate } from '../../locales'
import { form } from '../../utils'
import { userValidator } from '../../validators'

class Login extends Component {
  static defaultProps = {
    notificate: () => {}
  };

  state = {
    sending: false,
    errors: {},
    model: {
      email: '',
      password: ''
    }
  };

  render () {
    const { sending, errors } = this.state
    return (
      <AppLayout>

        <div className="login-page">
          <span></span>
          <div className="login">
            <Transition type='scale'>
              <h1 className="page-title">{translate('titles.login')}</h1>
              <div className="form">
                <FormControl
                  errors={form.getErrors('email', errors)}
                  label={translate('user.email')}
                  name='email'
                  type='email'
                  onChange={this._onChange}
                />
                <FormControl
                  errors={form.getErrors('password', errors)}
                  label={translate('user.password')}
                  name='password'
                  type='password'
                  onChange={this._onChange}
                />
                <div className="form__buttons">
                  <ButtonSpinner
                    block={true}
                    disabled={sending}
                    onClick={this._handleSubmit}
                  >
                    {translate('actions.enter')}
                  </ButtonSpinner>
                </div>
              </div>
            </Transition>
          </div>
          <AccountLinks login={false} />
        </div>
      </AppLayout>
    )
  };

  _onChange = (name, value) => {
    const model = {
      ...this.state.model,
      [name]: value
    }
    this.setState({ model })
  };

  _handleSubmit = event => {
    this.setState({ errors: {} }, () => {
      const data = Object.assign({}, this.state.model)
      userValidator.login(data).then(result => {
        if (result.success) {
          this.props.login(data)
        } else {
          this.setState({ errors: result.errors })
          this.props.notificate(result.message)
        }
      }).catch(error => {
        this.props.notificate(error.message)
      })
    })
  };
}

export default Login
