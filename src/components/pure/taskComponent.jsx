import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
            <h4>{task.level}</h4>
            <h5>This task is: {task.completed ? 'COMPLETED' : 'PENDING'}</h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
