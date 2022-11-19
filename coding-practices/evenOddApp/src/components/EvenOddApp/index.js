// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="count-number">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <div>
            <button className="button" type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p className="random-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
