import { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './store'

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <Counter />
    </div>
  )
}

class _Counter extends Component {
  render() {
    console.log(this.props, this.props.dec)
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.dec}>-</button>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.res}>reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
})

// variant 1
// const mapDispatchToProps = (dispatch) => ({
//   inc: () => dispatch(increment),
//   dec: () => dispatch(decrement),
//   res: () => dispatch(reset),
// })

// variant 2
// const mapDispatchToProps = (dispatch) => ({
//   inc: bindActionCreators(increment),
//   dec: bindActionCreators(decrement),
//   res: bindActionCreators(reset),
// })

// variant 3
const mapDispatchToProps = {
  inc: increment,
  dec: decrement,
  res: reset,
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter)
