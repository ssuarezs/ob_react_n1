import React, { useState, useEffect, useMemo } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/taskComponent'

function TaskListComponent(props) {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const defaultTask = new Task('Task1','My first Task',false,LEVELS.NORMAL)
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTasks([...defaultTask])
    }, [defaultTask])

    useEffect(() => {
        console.log('Tasks state has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks]);

    return (
        <div>
            <div>Your Tasks:</div>
            <TaskComponent task={defaultTask}/>
            <div>{loading?'loaded':''}</div>
        </div>
    )
}

export default TaskListComponent

