// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    stringLength: 0,
    searchInput: '',
  }

  OnClick = event => {
    //  this.setState({searchInput: event.target.value})
    // this.setState({stringLength: event.target.value.length,searchInput: event.target.value})  we can also update the state by comma separated
    // console.log(event.target.value);
    this.setState({stringLength: event.target.value.length})
  }

  render() {
    const {stringLength, searchInput} = this.state

    return (
      <div className="container">
        <div>
          <h1>Calculate the Letters you enter</h1>

          <label for="input">Enter the phrase</label>
          <br />
          <input
            id="input"
            onChange={this.OnClick}
            type="text"
            placeholder="Enter the phrase"
          />
          <br />
          <p className="count">No.of letters: {stringLength}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
