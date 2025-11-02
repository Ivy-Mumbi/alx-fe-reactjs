// This component receives 'props' as an argument
const UserProfile = (props) => {
  return (
    <div>
      {/* It uses dot notation to access the values from the props object */}
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;