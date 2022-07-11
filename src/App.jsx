import React from "react";


export class Login extends React.Component{

    state = {
        username:"",
        password:"",
        checkbox:"",
    }
  
    render(){
        return <div>

                <label for="username">Username:</label>
                <input for="username"></input>
                <label for="password">Password:</label>
                <input id="password"></input>
                <label for="rememberCheckbox">Remember</label>
                <input id="rememberCheckbox" type="checkbox"></input>
                
               </div>
    }
}


export class App extends React.Component{
    render(){

        return <Login></Login>
    }
}


