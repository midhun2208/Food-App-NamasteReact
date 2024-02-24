import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div >
      <h1>About</h1>
      <h2>Namaste React Web series</h2>
      {/* passing props */}
      <User name = {'Midhun P M'} />

      <UserClass/>
    </div>
  );
};

export default About;
