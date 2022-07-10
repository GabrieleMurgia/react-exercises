import React from "react";


export class ClickTracker extends React.Component{

    state = {
        buttonPressed:""
    }
        singleEventHandler = (event)=>{
            this.setState(()=>{
                return {
                    buttonPressed: event.target.textContent
                }
            })
        }
  
   
    render(){
        return <div>
            <h1> {this.state.buttonPressed && "Hai premuto il "}
            {this.state.buttonPressed}</h1>
            <button onClick={this.singleEventHandler}>Bottone1</button>
            <button onClick={this.singleEventHandler}>Bottone2</button>
            <button onClick={this.singleEventHandler}>Bottone3</button>
        </div>
    }
}