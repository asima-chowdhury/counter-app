import React, { Component } from 'react';

class counter extends Component {
    state = {
        value: this.props.value,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.value + 1 })
    }

    render() {
        console.log('props', this.props);
        return (
            <div>
                {this.props.children}
                <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm my-1">increment</button>
                <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-1">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;

    }

}

export default counter;