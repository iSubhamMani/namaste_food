import { useEffect } from "react";

const User = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name: {props.props.name}</h2>
      <h3>Location: {props.props.location}</h3>
      <h4>Contact @iSubhamMani</h4>
    </div>
  );
};

export default User;
