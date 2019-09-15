import React, { Component } from 'react'

class FormControl extends Component {
  static defaultProps = {
    errors: [],
    type: 'text',
    name: null,
    label: null,
    onChange: () => {}
  };

  render () {
    return (
      <div className={this._getClasses()}>
        <label className="form__label">{this.props.label}</label>
        <div className="form__input">
          <input type={this.props.type} name={this.props.name} className="form__input__input" onChange={this._onChange} />
        </div>
        {this._getErrors()}
        {this.props.children}
      </div>
    )
  };

  _getClasses = () => {
    let classes = ['form__control']
    if (this.props.errors.length > 0) {
      classes.push('form__control--error')
    }
    return classes.join(' ')
  };

  _getErrors = () => {
    if (this.props.errors.length > 0) {
      const errors = this.props.errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))
      return <ul className="form__control__errors">{errors}</ul>
    }
  };

  _onChange = event => {
    this.props.onChange(this.props.name, event.target.value)
  };
}

export default FormControl
