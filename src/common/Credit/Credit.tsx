import React, { Component } from 'react'
import './Credit.scss'

interface CreditProps {
  text: string
  top?: string
  right?: string
  bottom?: string
  left?: string
  color?: string
}

class Credit extends Component<CreditProps> {
  public static defaultProps = {
    color: '#eeeeee',
  }

  public render() {
    const style: React.CSSProperties = {
      top: this.props.top,
      right: this.props.top,
      bottom: this.props.bottom,
      left: this.props.left,
      color: this.props.color,
    }

    return (
      <div className="credit" style={ style }>
        { this.props.text }
      </div>
    )
  }
}

export default Credit
