import React from 'react';
import { useState, useEffect } from 'react';


const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Task;