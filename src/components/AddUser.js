import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      bio: "",
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
          onChange={(e) => this.setState({ firstname: e.target.value })}
        ></input>
        <input
          className="imput-form-user"
          placeholder="lastname"
          onChange={(e) => this.setState({ lastname: e.target.value })}
        ></input>
        <textarea
          className="imput-form-user"
          placeholder="bio"
          onChange={(e) => this.setState({ bio: e.target.value })}
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
            this.props.onAdd({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              bio: this.state.bio,
              age: this.state.age,
              isMarry: this.state.isMarry,
            });
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default AddUser;
