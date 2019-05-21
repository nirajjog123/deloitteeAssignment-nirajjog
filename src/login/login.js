import React from 'react';
import { Redirect } from 'react-router';


class Login extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.location.state)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

        this.state={
            firstName: null,
            password: null,
            redirect:false
        }

    }
    handleUserName(e){
        this.setState({firstName:e.target.value})
    }

    handlePassword(e){
        this.setState({password:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({redirect:true})
        console.log(this.state);

    }
    render(){
        const { redirect } = this.state;
        return(
            <div>login page
                 <div className="create_account_form">
          <form onSubmit={this.handleSubmit}>
              "User Name" 
          <input             
              onChange={this.handleUserName}
            /><br/>
              "Password" 
            <input 
              type="password"
              validator="true"
              onChange={this.handlePassword}
              
            /><br/>
            <button 
              type="submit" 
              className="button button_wide">
              Sign In
            </button>

          </form>
        </div>
        {redirect &&
                <Redirect to={{ pathname: '/dashboard',state: this.props.location.state }} />}
            </div>
            
        );
    }
}
export default  Login;