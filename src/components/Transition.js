import React, { Component } from 'react'

class Transition extends Component {
  static defaultProps = {
    type: 'scale'
  };

  render () {
    let classes = ['transition']
    classes.push(`transition--${this.props.type}`)
    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    )
  };
}

export default Transition
