import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
class About extends React.Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        
        console.log("DidMount")
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>About us</h1>
        <p>This is React for you.</p>
        
        <ProfileClass/>
      </div>
    );
  }
}
export default About;
