// Write your code here
import {Component} from 'react'
import './index.css'

class LogoutButton extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  render() {
    const {onButtonClick} = this.props
    return (
      <button onClick={onButtonClick} type="button" className="button">
        Logout
      </button>
    )
  }
}

export default LogoutButton
