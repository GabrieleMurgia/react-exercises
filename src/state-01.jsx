import React from "react";

export class Counter extends React.Component{

    state = {
            counter:this.props.counter,
    }
    
    constructor(props){
        super(props)

        setInterval(() => {
            this.setState({
                counter: this.state.counter + this.props.increment
            })
        }, this.props.interval);
    }

    render(){
        return <h1>{this.state.counter}</h1>
    }
}