import React  from "react";

const AddTaskForm = (props) => {
    return(
        <div>
            <form onSubmit={props.submit}>
                <label>
                    task title:
                    <input type="text" name="title" required  onChange={(event) => props.change(event)}/>
                </label>
                <br />
                <label>Due date:
                    <input type="text" name="description"  onChange={(event) => props.change(event)}/>
                </label>
                <input type="submit" value="Submit" onChange={(event) => props.change(event)} />
            </form>
        </div>
    )
};

export default AddTaskForm
