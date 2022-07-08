import React from "react";

export class CounterDisplay extends React.Component{
       state = {
            counter:this.props.counter,
    }
    
  componentDidMount(){
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

export class Counter extends React.Component{

   
    render(){
        return <CounterDisplay counter={this.props.counter} increment={this.props.increment} interval={this.props.interval}></CounterDisplay>
    }
}