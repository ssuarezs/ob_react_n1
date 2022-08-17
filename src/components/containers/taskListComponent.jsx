import React, {useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/taskComponent'

function TaskListComponent(props) {

    const defaultTask = new Task('Task1','My first Task',false,LEVELS.NORMAL)
    const [tasks, setTasks] = useState([defaultTask]);

    useEffect(() => {
        console.log('Tasks state has been modified')
        return () => {
            console.log('TaskList component is poing to unmount...')
        }
    }, [tasks]);

    return (
        <div>
            <div>Your Tasks:</div>
            <TaskComponent task={defaultTask}/>
        </div>
    )
}

export default TaskListComponent

