import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0
        }
    }
    increment = () => {
        this.setState({number : this.state.number+1})
    };
    decrement = () => {
        this.setState({number : this.state.number-1})
    };
    neutral = () => {
        this.setState({number : 0})
    };
    render() {
        return (
            <div className= 'row justify-content-center'>
                <div className='col-md-5' style={{ marginTop: '200px', border: '3px solid black' }}>
                    <h1>REACT COUNTER</h1>
                    <h2>{this.state.number}</h2>
                    <button className='btn btn-primary' onClick={this.increment}>Increment</button>
                    <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
                    <button className='btn btn-success' onClick={this.neutral}>Neutral</button>

                </div>
            </div>


        );
    }
}

export default Main;