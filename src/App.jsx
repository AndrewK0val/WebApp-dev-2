import './App.css';
import Task from './components/task';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import AddTaskForm from './components/form';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';






export default function App() {


  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today", done: false, priority: "High" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false, priority: "Medium" },
      { title: "Tidy up", deadline: "Today", description: "Tidy up the living room", done: false, priority: "Low" },
      { title: "Mop floors", deadline: "Next week", description: "All floors in the house", done: false, priority: "High"},
      { title: "Clean windows", deadline: "Tomorrow", description: "Clean all windows in the house", done: false, priority: "Medium" }
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
  let form = {...formState}

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
    case "priority":
      form.priority = event.target.value
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
      {/* App Header */}
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx = {{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>
      {/* Task Card Grid */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-top" justifyContent="center">
          {taskState.tasks.map((task, index) => (
                <Task 
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                done={task.done}
                key={task.id}
                priority={task.priority}
                markDone = {() => doneHandler(index)}
                deleteTask = {() => deleteHandler(index)}
              />
          ))}
        </Grid>
      </Container>
      {/* End Task Card Grid */}
      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6,
        }}
      >
        <Grid container justifyContent="center">
          <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
        </Grid>
      </Container>
      {/* End Footer */}
      
    </div>
  );
}

