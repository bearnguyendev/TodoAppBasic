import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Missing title");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <>
        <p>Simple TODO Apps with React.js (Puppy &amp; Puppy Channel)</p>
        <div className="add-todo">
          <input
            type={"text"}
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button
            type="button"
            className="add"
            onClick={() => this.handleAddTodo()}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}
export default AddTodo;