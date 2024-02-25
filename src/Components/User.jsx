import { useState } from "react";

// passed a porp name from the About Component
const User = ({ name }) => {
  //to create state variable in  functional component
const [count] = useState(0)

  return (
    <div className="user-card">
      <h1>Count1 : {count}</h1>
      <h1>Name : {name}</h1>
      <h2>Location : Kerala</h2>
      <h3>Contact : midhun.sm343@gmail.com</h3>
    </div>
  );
};
export default User;
