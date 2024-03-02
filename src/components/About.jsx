import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
  constructor(props){
    super(props)
    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent CDM");
  }

  render(){
    console.log("parent render");
    return (
      <div className="about">
        <h1>It's about us page</h1>
        < UserClass />
      </div>
    );
  }
}

 

export default About;
