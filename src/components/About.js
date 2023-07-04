/* eslint-disable no-useless-constructor */
import UserClass from "./userClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Inside Parent Constructor");
    }

    componentDidMount(){
        console.log("Inside Parent componentDidMount method");
    }

    render(){
        console.log("Inside Parent Render method");
        return(
            <>
                <h1>About US</h1>
                <h3>This is about us page</h3>
                <div className="about-container">
                    <UserClass name={"Kunal Chanda"} location={"Balurghat, BeltalaPark"}/>
                    <UserClass name={"Akshai Saini"} location={"Derhadun, Uttrakhand"}/>
                </div>
            </>
        )
    }
    
}

export default About;