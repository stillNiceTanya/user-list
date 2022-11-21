import React from "react";

class AddUser extends React.Component {
  userAdd = {};

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      age: 1,
      isMarry: false,
    };
    this.myForm = React.createRef();
  }

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          className="imput-form-user"
          placeholder="firstname"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        ></input>
        <input
          className="imput-form-user"
          placeholder="lastname"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        ></input>
        <textarea
          className="imput-form-user"
          placeholder="email"
          onChange={(e) => this.setState({ email: e.target.value })}
        ></textarea>
        <input
          className="imput-form-user"
          placeholder="age"
          onChange={(e) => this.setState({ age: e.target.value })}
        ></input>
        <br />
        <label htmlFor="isMarry">Are you marry?</label>
        <input
          className="checkbox-form-user"
          type="checkbox"
          id="isMarry"
          onChange={(e) => this.setState({ isMarry: e.target.checked })}
        ></input>
        <br />
        <button
          className="imput-form-user button"
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              age: this.state.age,
              isMarry: this.state.isMarry,
            };
            if (this.props.user) this.userAdd.id = this.props.user.id;
            this.props.onAdd(this.userAdd);
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default AddUser;
