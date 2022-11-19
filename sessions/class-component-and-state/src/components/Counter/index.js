import React, {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previous state value ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="header">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
