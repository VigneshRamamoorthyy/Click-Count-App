import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">
          The Button has been clicked{' '}
          <span className="number-count">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button
          className="click-button"
          onClick={this.onIncreament}
          type="button"
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
