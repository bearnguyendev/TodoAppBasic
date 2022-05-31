import React from "react";
import { withRouter } from "react-router";
import logo from "../../assets/images/meo.jpg";
import Color from "../HOC/Color";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log("Check Timeout");
    }, 3000);
  }
  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello From Home Page with Puppy</div>
        <div>
          <img src={logo} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>X</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add New</button>
        </div>
      </>
    );
  }
}
//export default withRouter(Home);

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
