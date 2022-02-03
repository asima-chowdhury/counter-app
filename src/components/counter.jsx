import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0,
    };


    // event handlers using arrow function
    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">increment</button>
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