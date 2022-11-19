// Write your code here
import {Component} from 'react'
import './index.css'

class LoginButton extends Component {
  render() {
    const {onButtonClick} = this.props
    return (
      <button onClick={onButtonClick} type="button" className="button">
        Login
      </button>
    )
  }
}

export default LoginButton
