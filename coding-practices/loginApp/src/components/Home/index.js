// Write your code here
import {Component} from 'react'
import LoginButton from '../Login/index'
import LogoutButton from '../Logout/index'
import Message from '../Message/index'
import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleLoginButton = this.handleLoginButton.bind(this)
    this.handleLogoutButton = this.handleLogoutButton.bind(this)
    this.state = {message: 'Please Login', isLoggedIn: false}
  }

  handleLoginButton = () => {
    console.log('button clicked')
    this.setState({message: 'Welcome user!'})
    this.setState({isLoggedIn: true})
  }

  handleLogoutButton = () => {
    this.setState({message: 'Please Login'})
    this.setState({isLoggedIn: false})
  }

  render() {
    const {message, isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message message={message} />
          <div>
            {isLoggedIn ? (
              <LogoutButton onButtonClick={this.handleLogoutButton} />
            ) : (
              <LoginButton onButtonClick={this.handleLoginButton} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
