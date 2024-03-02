import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
     console.log(this.props.name+"Child Constructor");

    this.state = {
      userInfo:{
         
      }
    };
  }

  async componentDidMount(){
     console.log(this.props.name+"Child ComponentDidMount");
    const data = await fetch('https://api.github.com/users/midhun2208')
    const json = await data.json()

    
    this.setState({
      userInfo:json
    })

  }
  componentDidUpdate(){
    console.log("DidUpdate");
  }

  render() {
     console.log(this.props.name+"Child Render");
    const { name, location,avatar_url } = this.state.userInfo;
 

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact : midhun.sm343@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
