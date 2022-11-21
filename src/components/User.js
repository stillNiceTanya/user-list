import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";

class User extends React.Component {
  user = this.props.user;
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }

  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          onClick={() => this.props.onDelete(this.user.id)}
          className="delete-icon"
        ></IoCloseCircleSharp>
        <IoHammerSharp
          onClick={() => {
            this.setState({
              editForm: !this.state.editForm,
            });
          }}
          className="edit-icon"
        ></IoHammerSharp>

        <h3>{`${this.user.first_name} ${this.user.last_name}`}</h3>
        <p>{this.user.email}</p>
        <p>{this.user.age}</p>

        <p>{this.user.isMarry ? "В браке" : "Не в браке"}</p>

        {this.state.editForm && (
          <AddUser
            user={this.user}
            onAdd={this.props.onEdit}
          ></AddUser>
        )}
      </div>
    );
  }
}

export default User;
