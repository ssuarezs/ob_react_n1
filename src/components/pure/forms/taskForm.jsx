import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add}) => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const registrationSchema = Yup.object().shape({
        name: Yup.string()
                    .required('Task name is required')
                    .min(4, 'Task name too short'),
        description: Yup.string()
                    .required('Task description is required')
                    .min(8, 'Task description too short'),
        level: Yup.string()
                    .oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],'You must select a level')
                    .required('Task level is required')
    })

    const submitTask = async (values, {resetForm}) => {
        await new Promise((r) => setTimeout(r,1000)) 
        const {name, description, level} = values
        const newTask = new Task(
            name,
            description,
            false,
            level
        )
        add(newTask)
        resetForm({ values: '' })
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={registrationSchema}
                onSubmit={submitTask}
            >
                { ({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                    <Form>
                        <label htmlFor='name'>Task name</label>
                        <Field 
                            id='name' name='name' placeholder='Task name'
                            className='form-control form-control-lg mt-1'
                        />
                        {errors.name && touched.name && 
                            <ErrorMessage name='name' component='div'/>}

                        <label htmlFor='description'>Task description</label>
                        <Field 
                            id='description' name='description' placeholder='Description'
                            className='form-control form-control-lg mt-1'
                        />
                        {errors.description && touched.description && 
                            <ErrorMessage name='description' component='div'/>}

                        <label htmlFor='level'>Task level</label>
                        <Field 
                            id='level' name='level' as='select'
                            className='form-control form-control-lg mt-1'
                        >
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                        </Field>
                        {errors.level && touched.level && 
                            <ErrorMessage name='level' component='div'/>}
                        
                        <button type='submit' className='btn btn-success btn-lg m-3'>Register user</button>
                        {isSubmitting ? <p>Your User is being registered</p>:null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const TaskFormOLD = ({add}) => {
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
