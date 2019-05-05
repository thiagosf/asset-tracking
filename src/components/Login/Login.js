import React, { Component } from 'react'
import { AppLayout } from '../Layouts'
import { AccountLinks, FormControl, ButtonSpinner } from '../'
import { translate } from '../../locales'
import { form } from '../../utils'

class Login extends Component {
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
            <h1 className="page-title">{translate('titles.login')}</h1>
            <form action="#" className="form" onSubmit={this._handleSubmit}>
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
                  type='submit'
                  block={true}
                  disabled={sending}
                  onClick={this._handleSubmit}
                >
                  {translate('actions.enter')}
                </ButtonSpinner>
              </div>
            </form>
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

  _handleSubmit = () => {
    this.setState({ sending: true })
  };
}

export default Login
