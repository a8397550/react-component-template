import * as React from 'react'
import './index.less'

interface IProps {
  text: string;
}
type IState = {
  text: string;
}

export default class extends React.Component<IProps, IState> {
  static defaultProps = {
    text: 'props'
  }
  constructor(props) {
    super(props)
    this.state = {
      text: 'state'
    }
  }

  render() {
    return <div>
      {this.state.text}
      <br />
      {this.props.text}
    </div>
  }
} 