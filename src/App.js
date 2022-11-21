import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Bob",
          lastname: "Marley",
          bio: "lorem ipsum",
          age: 40,
          isMarry: true,
        },
        {
          id: 2,
          firstname: "Marilin",
          lastname: "Monroe",
          bio: "lorem ipsum",
          age: 34,
          isMarry: false,
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  render() {
    return (
      <div>
        <Header title="Список пользователей"></Header>
        <div className="container">
          {" "}
          <main>
            <Users
              users={this.state.users}
              onDelete={this.deleteUser}
            ></Users>
          </main>
          <aside>
            <AddUser onAdd={this.addUser}></AddUser>
          </aside>
        </div>
      </div>
    );
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({
      users: [...this.state.users, { id, ...user }],
    });
  }
}

export default App;
