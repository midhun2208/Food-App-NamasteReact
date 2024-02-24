import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div >
      <h1>About</h1>
      <h2>Namaste React Web series</h2>
      {/* passing props */}
      <User name = {'Midhun P M (function)'} />

      <UserClass name={"Midhun P M (class)"} location={"Kerala (class)"}/>
    </div>
  );
};

export default About;
