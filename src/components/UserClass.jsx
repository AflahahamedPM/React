import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:{

        }
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aflahahamedpm");
    const json = await data.json();

    this.setState({userInfo:json})

    console.log("child CDM");
  }

  componentDidUpdate(){
    console.log("child component did update");
  }
  render() {
    console.log("child render");

    const{name} = this?.state?.userInfo;
    return (
      <>
        <h1>{name}</h1>
      </>
    );
  }
}

export default UserClass;
