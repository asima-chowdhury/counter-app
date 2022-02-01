import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0
    }

    styles = {
        fontSize: 20,
        fontWeight: 'bold',
    };

    render() {
        return (
            <div>
                {/* <span>{this.state.count}</span> */}
                {/* <span style={this.styles} className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>  */}

                <span style={{ fontSize: 10 }} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
            </div>
        );
    }

    formatCount() {

        // return this.state.count === 0 ? 'Zero' : this.state.count;
        const { count } = this.state;
        // return count === 0 ? <h2>Zero</h2> : count;        
        return count === 0 ? 'Zero' : count;

    }
}

export default counter;