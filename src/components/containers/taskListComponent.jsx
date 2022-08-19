import React, { useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/taskComponent'
import '../../styles/task.scss'

function TaskListComponent() {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const defaultTask = new Task('Task1','My first Task',false,LEVELS.NORMAL)
    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        console.log('Tasks state has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks]);

    return (
        <div>
            <h1>Your Tasks:</h1>
            <TaskComponent task={defaultTask}/>
            <div>{loading?'loaded':''}</div>
        </div>
    )
}

export default TaskListComponent

