import React from "react";


export class ClickCounter extends React.Component{

    state = {
        counter:0
    }

    incrementCounter = () => {
        this.setState(state =>{
            return {
                counter: state.counter + this.props.increment
            }
        })
    }
   
    render(){
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.incrementCounter}>ClickToIncrement</button>
        </div>
    }
}