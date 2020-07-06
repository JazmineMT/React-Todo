import React , {useEffect} from 'react';
import ReactDom from 'react-dom';
import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const tasks = [
  {
    name: "Complete MVP",
    id: 123,
    completed: false,
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks:tasks
    }
  }


  addTask = taskName =>{
    const newTask = {
      name: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask ] 
    }, ()=> {localStorage.setItem('newTask', JSON.stringify(newTask))}
    )
  }

  toggleTask = taskId =>{
    this.setState({
      tasks: this.state.tasks.map(task =>{
        if(task.id === taskId ){
          return{
            ...task,
            completed: !task.completed
          }
        }else{
          return task;
        }
      })
    })
  }

  clearTask = () =>{
    const oldTasks = this.state.tasks.filter( task=> {
      return task.completed === !true;
    })
      
    this.setState({
      tasks: [...oldTasks]
    })
  }
   
 

  render() {
    return (
      <div>
        <h2>To Do List </h2>
        <ToDoList
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}/>
        <TodoForm addTask={this.addTask} clearTask={this.clearTask}/>
      </div>
    );
  }
}

export default App;
