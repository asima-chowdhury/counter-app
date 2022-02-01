import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                {/* <span>{this.state.count}</span> */}
                <span>{this.formatCount()}</span> 
                <button>increment</button>
            </div>
        );
    }

    formatCount(){
        // const count = this.state;
        return this.state.count === 0 ? 'Zero' : this.state.count;

    }
}

export default counter;