
// passed a porp name from the About Component
const User = ({name}) => {
  return (
    <div className="user-card">
      <h1>Name : {name}</h1>
      <h2>Location : Kerala</h2>
      <h3>Contact : midhun.sm343@gmail.com</h3>
    </div>
  );
};
export default User;
