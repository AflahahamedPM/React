import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("parent CDM");
  }

  render(){
    return (
      <div className="">
        <h1>It's about us page</h1>
        < UserClass />
      </div>
    );
  }
}

 

export default About;
