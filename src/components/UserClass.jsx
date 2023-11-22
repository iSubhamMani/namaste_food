import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "US",
      },
    };
  }

  componentDidMount() {
    // API call
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // returns JSX
    const { name, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>{bio}</h3>
        <h4>Contact @iSubhamMani</h4>
      </div>
    );
  }
}

export default UserClass;
