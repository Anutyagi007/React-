import React from "react";
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
            }
        }
        console.log("constructor");
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Anutyagi007");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })

        console.log("componentDidMount")
    }
    render(){
        
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>Location:{this.state.userInfo.location}</h2>
                
            </div>
        )
        
    }
}

export default ProfileClass;