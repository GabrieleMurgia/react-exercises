import React from "react";


export class Login extends React.Component{
        state = {
            username:"",
            password:"",
        }
    
        handleInputs = (event)=>{
            const value = event.target.value
            const name = event.target.name
                this.setState({
                    ...this.state,
                    [name]: value
                })
           
            }   
        render(){
            return <div>
                    <label >Username:</label>
                    <input name="username" onChange={this.handleInputs} value={this.state.username}></input>
                    <label >Password:</label>
                    <input name="password" type="password" onChange={this.handleInputs} value={this.state.password}></input>
                    <label >Remember</label>
                    <input name="rememberCheckbox" type="checkbox"></input>
                    <button onClick={() => this.props.onLogin(this.state)} disabled={!(this.state.password && this.state.username)}>Login</button>
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
    render(){
        return <Login onLogin={this.onLogin} ></Login>
    }
}


