import React from 'react';


class Dashboard extends React.Component{

    constructor(props){
        super(props);
        console.log('in the dashboard'+this.props.location.state)
    }


    render(){
        const details = this.props.location.state;
        return(
            <div>Welcome to Dashboard <br/>
        
First Name : {details.firstName}<br/>
Last Name :  {details.lastName}<br/>
Email :     {details.email}<br/>
Mobile Number : {details.mobileNumber}<br/>
            </div>

        );
    }
}

export default  Dashboard;