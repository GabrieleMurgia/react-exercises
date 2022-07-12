import React from "react";


export class Login extends React.Component{

    state = {
        username:"",
        password:"",
    }

    handleInputs = (event)=>{
        
        if(event.target.id == "username"){
            this.setState({
                ...this.state,
                username: event.target.value
            })
        }else if(event.target.id == "password"){
            this.setState({
                ...this.state,
                password: event.target.value
            })
        }   
    }
    render(){
        return <div>
                <label for="username">Username:</label>
                <input id="username" onChange={this.handleInputs}></input>
                <label for="password">Password:</label>
                <input id="password" onChange={this.handleInputs}></input>
                <label for="rememberCheckbox">Remember</label>
                <input id="rememberCheckbox" type="checkbox"></input>
                <button onClick={() => this.props.onLogin(this.state)} disabled={!(this.state.password && this.state.username)}>Login</button>
                <button onClick={ () => this.props.resetValue()}>Reset</button>
               </div>
    }
}
export class App extends React.Component{


    onLogin = (state)=>{
          const obj = {
                username:state.username,
                password:state.password
            }
            console.log(obj)
            return obj
    }
    resetValue = ()=>{
        document.querySelectorAll("input").forEach(
            input => (input.value = "")
          );
    }
    render(){
        return <Login onLogin={this.onLogin} resetValue={this.resetValue}></Login>
    }
}


