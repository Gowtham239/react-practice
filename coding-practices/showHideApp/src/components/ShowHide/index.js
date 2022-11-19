// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: false,
      secondName: false,
    }
  }

  onFirstname = () => {
    const {firstName} = this.state

    this.setState(() => ({firstName: !firstName}))
  }

  onSecondname = () => {
    const {secondName} = this.state

    this.setState(() => ({secondName: !secondName}))
  }

  render() {
    const {firstName, secondName} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="show-and-hide-container">
              <button
                className="button"
                type="button"
                onClick={this.onFirstname}
              >
                Show/Hide Firstname
              </button>

              {firstName ? <p className="name-container">Joe</p> : ''}
            </div>

            <div className="show-and-hide-container">
              <button
                className="button"
                type="button"
                onClick={this.onSecondname}
              >
                Show/Hide Lastname
              </button>
              {secondName ? <p className="name-container">Jonas</p> : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
