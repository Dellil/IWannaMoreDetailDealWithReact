import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleIncrease = () => {
        console.log('increase');
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleDecrease = () => {
        console.log('decrease');
        this.setState({
            counter: this.state.counter -1
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        );
    }
}


// function reducer(state, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);
//     const onIncrese = () => {
//         dispatch({
//             type: "INCREMENT"
//         })
//     }
//     const onDecrease = () => {
//         dispatch({
//             type: "DECREMENT"
//         })
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrese}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;