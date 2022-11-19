import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    lightMode: true,
  }

  onButton = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  render() {
    const {lightMode} = this.state
    const modeClassName = lightMode ? 'light-mode' : 'dark-mode'
    const buttonText = lightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
