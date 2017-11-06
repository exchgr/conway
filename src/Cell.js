import React from 'react'

export default class Cell extends React.Component {
  element = null
  toggled = null

  shouldComponentUpdate = (nextProps) => this.props.toggled !== nextProps.toggled

  toggledString() {
    return this.props.toggled ? "on" : "off"
  }

  toggle = () => {
    this.props.toggle(this.props.x, this.props.y)
  }

  render() {
    if (!this.element || this.props.toggled !== this.toggled) {
      this.toggled = this.props.toggled
      this.element = <div className={`cell ${this.toggledString()}`} onClick={this.toggle}>&nbsp;</div>
    }

    return this.element
  }
}
