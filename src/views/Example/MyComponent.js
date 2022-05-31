import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  // state = {
  //     name : 'Puppy',
  //     channel : 'PuppyChannel'
  // }
  state = {
    arrJobs: [
      { id: "job1", title: "Developers", salary: "500" },
      { id: "job2", title: "Testers", salary: "400" },
      { id: "job3", title: "Project Managers", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  /**
   * JSX ->> return block
   *
   */

  // handleOnChangeName = (event) =>{
  //     this.setState({
  //         name : event.target.value
  //     })
  //  }

  // handleClickButton = () =>{
  //     alert('click me')
  // }

  render() {
    return (
      <>
        {/* <div className='first'>
                    <input value={this.state.name} type="text"
                        onChange={(event)=>this.handleOnChangeName(event)}
                    />
                    Hello MyComponent, My name is: {this.state.name}     
                </div>
                <div className='second'>
                    My channel is: {this.state.channel}  
                </div>
                <div className='third'>
                    <button onClick={()=>this.handleClickButton()}>Click me</button>
                </div> */}
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default MyComponent;
