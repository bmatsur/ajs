import {Component, ReactNode} from 'react'

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

class CounterClass extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
          )
    }
}

export default CounterClass