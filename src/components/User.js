import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp className="delete-icon"></IoCloseCircleSharp>
        <IoHammerSharp className="edit-icon"></IoHammerSharp>

        <h3>{`${this.user.firstname} ${this.user.lastname}`}</h3>
        <p>{this.user.bio}</p>
        <p>{this.user.age}</p>
        <p>{this.user.isHappy ? "Счастлив =)" : "Не счастлив =("}</p>
      </div>
    );
  }
}

export default User;
