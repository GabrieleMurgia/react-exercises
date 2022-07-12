import React from "react";


export class Login extends React.Component{
    state = {
        username:"",
        password:"",
        remember:"",

    }

    handleInputs = (event)=>{
        const value = event.target.value
        const name = event.target.name
            this.setState({
                ...this.state,
                [name]: value
            })
        }  
    handleCheck = (event)=>{
        const checked = event.target.checked
        const name = event.target.name

        this.setState({
            [name]:checked,
        })
    } 
    render(){
        return <div>
                <label >Username:</label>
                <input name="username" onChange={this.handleInputs} value={this.state.username}></input>
                <label >Password:</label>
                <input name="password" type="password" onChange={this.handleInputs} value={this.state.password}></input>
                <label >Remember</label>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleCheck}></input>
                <button onClick={() => this.props.onLogin(this.state)} disabled={!(this.state.password && this.state.username)}>Login</button>
                <button onClick={ () => this.props.resetValue(this)}>Reset</button>
               </div>
    }
}
export class App extends React.Component{


    onLogin = (state)=>{
          const obj = {
                username:state.username,
                password:state.password,
                remember:state.remember ? true : false
            }
            console.log(obj)
            return obj
    }
    resetValue = (okok)=>{
        okok.setState({
            username:"",
            password:"",
            remember:""
        })
    }
    render(){
        return <Login onLogin={this.onLogin} resetValue={this.resetValue}></Login>
    }
}


