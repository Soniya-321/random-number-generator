// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  getRandomNumber = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(() => ({randomNum: randomNum}))
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.getRandomNumber}>Generate</button>
          <p className="count">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
