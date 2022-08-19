import React, { useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/taskComponent'
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm'

function TaskListComponent() {

    const defaultTask1 = new Task('Task1','Discription1',true,LEVELS.NORMAL)
    const defaultTask2 = new Task('Task2','Discription2',false,LEVELS.URGENT)
    const defaultTask3 = new Task('Task3','Discription3',false,LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3])
    const [loading, setLoading] = useState(false)

    const addTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask])
    }


    useEffect(() => {
        console.log('Tasks state has been modified')
        setLoading(true)
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks]);

    return (
        <div>
            <div className='m-3'>
                {loading ? 'Loaded' : 'Loading...' }
            </div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', heigth: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'><span className='m-2'>Title</span></th>
                                    <th scope='col'><span className='m-2'>Description</span></th>
                                    <th scope='col'><span className='m-2'>Level</span></th>
                                    <th scope='col'><span className='m-2'>Actions</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => 
                                    <TaskComponent 
                                        key={index} 
                                        task={task}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm></TaskForm>
        </div>
    )
}

export default TaskListComponent

