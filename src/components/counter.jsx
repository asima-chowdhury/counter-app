import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0,
        tags:[],
        // tags:["tag1","tag2","tag3"],
    }

    // 1st way:
    renderTags(){
        // if(this.state.tags.length === 0) return null;
        if(this.state.tags.length === 0) return <p>There is no tags to display.</p>;
        return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>
    }
    render() {
        return (
            <div>
                {/* 2nd way: */}
                {this.state.tags.length === 0 && "No tags to display."}
                {this.renderTags()}
            </div>
        );
    }


/*    render() {
        return (
            <div>
               <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">increment</button>
                <ul>
                    {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {        
        let classes  = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;

    }
    */ 
}

export default counter;