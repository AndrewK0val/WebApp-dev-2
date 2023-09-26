import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import React, { useState } from 'react';
import AddTaskForm from './components/form';
import { v4 as uuidv4 } from 'uuid';





export default function App() {


  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today", done: false },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { title: "Tidy up", deadline: "Today", description: "Tidy up the living room", done: false },
      { title: "Mop floors", deadline: "Next week", description: "All floors in the house", done: false},
      { title: "Clean windows", deadline: "Tomorrow", description: "Clean all windows in the house", done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    //used the spread operator to copy the state before making this change
    const tasks = [...taskState.tasks];
    //line below sets the “done” property for a task to the opposite
    //of its current state (switching from false to true, or vice versa)
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks})
    console.log(`${taskIndex} ${tasks[taskIndex].done}`)
  }

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: ""    
  });

const deleteHandler = (taskIndex) => {
  // Create a new array 'tasks' by spreading the elements from 'taskState.tasks'
  const tasks = [...taskState.tasks]
  // Use the 'splice' method to remove one element at the 'taskIndex'
  tasks.splice(taskIndex, 1)
  // Update the 'taskState' by setting the 'tasks' property to the modified 'tasks' array
  setTaskState({tasks})
}



const formChangeHandler = (event) => {
  let form = {... formState}

  switch(event.target.name){
    case "title": 
        form.title = event.target.value
        break
    case "description":
        form.description = event.target.value
        break
    case "deadline":
      form.deadline = event.target.value
      break
    default:
      form = formState
  }
  setFormState(form)
}
console.log(formState);

const formSubmitHandler = (event) => {
  event.preventDefault()
  const tasks = [...taskState.tasks]
  const form = {...formState}
  
  form.id = uuidv4();

  tasks.push(form)
  setTaskState({tasks})

}


  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task 
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask = {() => deleteHandler(index) }
        />
      ))}
      <AddTaskForm  submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}

