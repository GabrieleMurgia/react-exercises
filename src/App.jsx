import React from "react";


export class Welcome extends React.Component{
    render(){
        return(
            <p>Welcome {this.props.name}</p>
        )
    }
}


export class App extends React.Component{
    render(){

        return <InteractiveWelcome></InteractiveWelcome>
    }
}

export class InteractiveWelcome extends React.Component{
    state = {
        username:"",
    }
    handleUsername = (event)=>{
        this.setState({username:event.target.value})
    }
    render(){
        return  <div>
                <input onChange={this.handleUsername}></input>
                <Welcome name={this.state.username}></Welcome>
                </div>
    }

}
