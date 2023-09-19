import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import React, { useState } from 'react';




export default function App() {


  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today", description: "Tidy up the living room" },
      { title: "Mop floors", deadline: "Next week", description: "All floors in the house"},
      { title: "Clean windows", deadline: "Tomorrow", description: "Clean all windows in the house" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
        <Task 
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
        />
      ))}
    </div>
  );
}

