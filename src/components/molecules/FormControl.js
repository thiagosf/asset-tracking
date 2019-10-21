import React, { Component } from 'react'
import Calendar from 'react-calendar'
import fecha from 'fecha'
import {
  Input,
  Checkbox,
  Radio,
  Select,
  Textarea,
  Icon
} from '../atoms'

class FormControl extends Component {
  static defaultProps = {
    value: '',
    errors: [],
    type: 'text',
    name: null,
    label: null,
    onChange: () => {}
  };

  state = {
    showCalendar: false
  };

  render () {
    return (
      <div className={this._getClasses()}>
        {this._getLabel()}
        {this._getInput()}
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
    this.props.onChange(event.target.value)
  };

  _getLabel = () => {
    const { type, label } = this.props
    switch (type) {
      case 'checkbox':
      case 'radio':
        return false

      default:
        return (
          <label
            className="form__label form__label--small"
          >{label}</label>
        )
    }
  };

  _getInput = () => {
    const { props } = this
    const { type, label } = props
    const { showCalendar } = this.state
    switch (type) {
      case 'checkbox':
        return (
          <div>
            <label
              className="form__label form__label--checkbox"
            >
              <Checkbox {...props} onChange={this._onChange} />
              <span
                className="form__label__text"
              >{label}</span>
            </label>
          </div>
        )

      case 'radio':
        return (
          <div>
            <label
              className="form__label form__label--radio"
            >
              <Radio {...props} onChange={this._onChange} />
              <span
                className="form__label__text"
              >{label}</span>
            </label>
          </div>
        )

      case 'textarea':
        return (
          <Textarea {...props} onChange={this._onChange} />
        )

      case 'select':
        return (
          <Select {...props} onChange={this._onChange} />
        )

      case 'calendar':
        let dateValue = null
        let formatedDate = ''
        if (props.value) {
          try {
            dateValue = props.value
            formatedDate = fecha.format(dateValue, 'DD/MM/YYYY')
          } catch (error) {
            dateValue = null
            formatedDate = ''
          }
        }
        return (
          <div
            className='input-and-calendar'
            onClick={() => {
              if (!showCalendar) {
                this.setState({
                  showCalendar: true
                })
              }
            }}
          >
            <Input
              {...props}
              value={formatedDate}
              readOnly
            />
            {showCalendar &&
              <div className="calendar">
                <Calendar
                  value={dateValue}
                  prevLabel={<Icon name='arrow-prev' />}
                  prev2Label={<Icon name='arrow-double-prev' />}
                  nextLabel={<Icon name='arrow-next' />}
                  next2Label={<Icon name='arrow-double-next' />}
                  onChange={value => {
                    props.onChange(value)
                    this.setState({
                      showCalendar: false
                    })
                  }}
                />
              </div>
            }
          </div>
        )

      default:
        return (
          <Input {...props} onChange={this._onChange} />
        )
    }
  };
}

export default FormControl
