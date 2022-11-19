// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  incrementMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  incrementBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="items-container">
              <img
                className="img-size"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.incrementMango}
              >
                Eat Mango
              </button>
            </div>

            <div className="items-container">
              <img
                className="img-size"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.incrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
