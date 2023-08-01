import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        //console.log(props);

        this.state = {
            count : 0,
        }

        console.log("Inside Child Constructor");
    }

    componentDidMount(){
        console.log("Inside Child componentDidMount method");
    }

    render(){
        console.log("Inside Child Render method");
        const{name, location} = this.props; //Destructure the props
        return(
            <div className="user-class">
                <h1>Count : {this.state.count}</h1>
                <button className="border border-black rounded-xl cursor-pointer px-2 bg-slate-300" onClick={()=> {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Increase Count</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 8240889871</h4>
            </div>
        );
    }

}

export default UserClass;