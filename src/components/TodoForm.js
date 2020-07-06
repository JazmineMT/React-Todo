import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            tasks: ''
        }
    }

    handleChnages = e =>{
        this.setState({
            tasks: e.target.value
        });
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.tasks);
        this.setState({
            tasks:['']
        })
    }
  

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <input
              type='text'
              name='task'
              value={this.state.tasks}
              onChange={this.handleChnages}
              />
              <button>Add Tasks</button>
              <button onClick={this.props.clearTask}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;