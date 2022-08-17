import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/taskComponent'

function TaskListComponent(props) {

    const defaultTask = new Task('Task1','My first Task',false,LEVELS.NORMAL)

    return (
        <div>
            <div>Your Tasks:</div>
            <TaskComponent task={defaultTask}/>
        </div>
    )
}

export default TaskListComponent

