import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
    password: Yup.string()
                .required('Password is required')
})

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }
    const submitLogin = async (values) => {
        await new Promise((r) => setTimeout(r,1000)) 
        alert(JSON.stringify(values, null, 2))
        localStorage.setItem('credentials', JSON.stringify(values, null, 2))
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial Values ***
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // *** onSubmit Function ***
                onSubmit={submitLogin}
            >
                { ({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id='email' name='email' placeholder='Email' type='email'/>
                            <ErrorMessage name='email'/>

                            <label htmlFor='password'>Password</label>
                            <Field id='password' name='password' placeholder='Password' type='password'/>
                            <ErrorMessage name='password'/>

                            <button type='submit'>Login</button>
                            {isSubmitting ? <p>Login your Credentials...</p>:null}
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default LoginFormik;
