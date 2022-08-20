import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add}) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const addTask = (e) => {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)

        nameRef.current.value = ''
        descriptionRef.current.value = ''
        levelRef.current.value = LEVELS.NORMAL
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center m-4'>
            <div className='form-outline flex-fill'>
                <input
                    id='inputName' type='text'
                    className='form-control form-control-lg mt-1'
                    placeholder='Task Name'
                    required autoFocus
                    ref={nameRef}
                />
                <input
                    id='inputDescription' type='text'
                    className='form-control form-control-lg mt-1'
                    placeholder='Task Description'
                    required
                    ref={descriptionRef}
                />
                <label htmlFor='selectLevel' className='sr-only'>Priority</label>
                <select
                    id='selectLevel'
                    defaultValue={LEVELS.NORMAL}
                    className='form-control form-control-lg mt-1'
                    ref={levelRef}
                >
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>
            </div>
            <button 
                type='submit' className='btn btn-success btn-lg ms-3'
            >Add</button>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
