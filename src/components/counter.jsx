import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0,
    };

    /* binding event handlers
    constructor() {
        super()
        console.log("constructor", this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        console.log("increment", this);
    }
    */

    // event handlers using arrow function
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () => {
        console.log("decrement", this);
    }
    render() {
        return (
            <div>
                <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">increment</button>
                <button onClick={this.handleDecrement} className="btn btn-warning btn-sm mx-2">decrement</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;

    }

}

export default counter;