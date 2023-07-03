import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log(props);
    }

    render(){
        const{name, location} = this.props; //Destructure the props
        return(
            <div className="user-class">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 8240889871</h4>
            </div>
        );
    }

}

export default UserClass;