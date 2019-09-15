import React, { Component } from 'react'

class Transition extends Component {
  static defaultProps = {
    type: 'scale',
    duration: 400,
    delay: 0
  };

  render () {
    const { type, duration, delay } = this.props
    let classes = ['transition']
    classes.push(`transition--${type}`)
    const styles = {
      animationDuration: `${duration}ms`,
      animationDelay: `${delay}ms`
    }
    return (
      <div className={classes.join(' ')} style={styles}>
        {this.props.children}
      </div>
    )
  };
}

export default Transition
