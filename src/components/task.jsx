import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function priorityColor(priority) {
    let color = ''
    switch (priority) {
        case 'High':
            color = 'red'
            break;
        case 'Medium':
            color = 'orange'
            break;
        case 'Low':
            color = 'yellow'
            break;
        default:
            color = 'white'
            break;
    }
    return color
}

const Task = (props) => {
    
    return (
        <Grid
        item
        key={props.id}
        xs={12}
        md={4}
    >
        <Card sx={{
            backgroundColor: props.done ? 'lightgrey' : 'lightblue',
            padding: '20px'
            }}> 
            <CardHeader
                title={props.title}
                sx={{
                backgroundColor: 'white',
                borderRadius: '3px',
                padding: '20px',
                textAlign: 'center'
                }}
            />
            <CardContent>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                    padding: '20px'
                }}
                >
                <Typography component="p" variant="subtitle2" color="text.primary">
                    Due: {props.deadline}
                </Typography>
                </Box>
                <Typography
                    component="p"
                    variant="subtitle1"
                    align="center"
                    sx={{ fontStyle: 'italic'}}
                >
                    {props.description}
                </Typography>
                <Typography
                    component="p"
                    variant="subtitle1"
                    align="center"
                    // color="white"
                    backgroundColor={priorityColor(props.priority)}
                    sx={{ fontStyle: 'bold'}}
                >
                   priority: {props.priority}
                </Typography>

            </CardContent>
            <CardActions sx={{justifyContent: 'space-between', padding: '20px'}}>
                <Button variant="contained" size="small" color="success" onClick={props.markDone}>
                    Done
                </Button>
                <Button variant="contained" size="small" color="error" onClick={props.deleteTask}> 
                    Delete
                </Button>
            </CardActions>
        </Card>
    </Grid>
    )
}

export default Task;