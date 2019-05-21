import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';


class Registration extends React.Component{

    constructor(props){
        super(props);

        this.state={
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            mobileNumber: null,
            redirect:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleMobileNumber = this.handleMobileNumber.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({redirect:true})
        console.log(this.state);

    }

    handleFirstName(e){
        this.setState({firstName:e.target.value})
    }
    handleLastName(e){
        this.setState({lastName:e.target.value})
    }
    handleEmail(e){
        this.setState({email:e.target.value})
    }
    handlePassword(e){
        this.setState({password:e.target.value})
    }
    handleMobileNumber(e){
        this.setState({mobileNumber:e.target.value})
    }

    render(){
        const { redirect } = this.state
        return(
            <div>Registeration Here!
         <div className="create_account_form">
          <h1>Create account</h1>
          <p>Example of form validation built with React.</p>
          <form onSubmit={this.handleSubmit}>
              "First Name" 
          <input 
              ref="firstName"
              validate={this.isEmpty}             
              onChange={this.handleFirstName}
            /><br/> 
              "Last Name" 
          <input 
              ref="lastName"
              validate={this.isEmpty}
              onChange={this.handleLastName} 
            /><br/> 
              "Email Address" 
            <input 
              ref="email"
              type="text"
              defaultValue={this.state.email} 
              validate={this.validateEmail}
              onChange={this.handleEmail}
            /><br/>
              "Password" 
            <input 
              type="password"
              ref="password"
              validator="true"
              onChange={this.handlePassword}
              
            /> <br/>
              "Mobile Number" 
             <input 
              ref="mobileNumber"
              validate={this.isEmpty}
              validator="true"
              onChange={this.handleMobileNumber}
            /> <br/>
            <button 
              type="submit" 
              className="button button_wide">
              CREATE ACCOUNT
            </button>

          </form>
        </div>
        {redirect &&
                <Redirect to={{ pathname: '/login',state: this.state }} />}
            </div>

        );
    }
}
Registration.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    mobileNumber: PropTypes.number
  };

 export default  Registration;