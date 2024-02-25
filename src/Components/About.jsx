
import { Component } from "react";
import UserClass from "./UserClass";


class About extends Component{
  constructor(props){
    super(props)
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount");
  }

  render(){
    console.log("Parent Render");
    return (
      <div >
        <h1>About</h1>
        <h2>Namaste React Web series</h2>
  
        <UserClass name={"Midhun P M (class)"} location={"Kerala (class)"}/>
      </div>
    );
  }
}

export default About;
