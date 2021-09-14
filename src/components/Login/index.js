import { Button, Grid,Paper,TextField, Typography, Link, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import './index.scss'

const Login = ({authorized}) => {
    
    let history = useHistory(); 
    
    const initialValues = {
        emailaddress: '',
        password: ''
    }
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(true)
        }, 2000)

        console.log(props)

    }
    const validationSchema = Yup.object().shape({
        emailaddress: Yup.string().email('Please enter valid email').required('Required'),
        password: Yup.string().min(8, 'Password minimum lenght should be 8').required('Required')
    })


    return (
        <Grid>
        <Paper elevation={10} className="paperStyle">
        

        <Grid className="gridStyle">
            
            
                <Box border={1} className="boxStyle" style={{padding:'50px 20px 20px 20px', width:'320px',height:'45vh',borderRadius:'15px'}} borderColor="gray">
                    <Grid align='center'>
                        <h2 className="fontcol" ><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" className="logo" alt="" style={{ width: 35, height: 36, borderRadius: 100 / 3 }} align='center' /> Blog </h2>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form >
                                <Field as={TextField} className="emailstyle"  label='Email address' name='emailaddress'
                                    variant="outlined" placeholder='Enter email address' fullWidth margin='normal' size="medium" 
                                    autoComplete="off"
                                    helperText={<ErrorMessage name='emailaddress' />}
                                />
                                <Field as={TextField}  label='Password' name='password'
                                    variant="outlined" placeholder='Enter password' type='password' fullWidth
                                    margin='normal' size="medium" 
                                    helperText={<ErrorMessage name='password' />}
                                />

                                <Typography align='right'color='primary' className="forgetstyle">
                                    <Link href="#" className="link">
                                        Forgot your password?
                                    </Link>
                                </Typography>

                                <Button variant="contained"  color="primary"  type='submit' style={{textTransform:'none'}} fullWidth  className="btnstyle" onClick={() => { history.push('/dashboard') }}>Sign In</Button>
                            </Form>
                        )}
                    </Formik>

                    <Typography className="bt"> Don't  have an account?
                        <Link   color="primary" onClick={() => { history.push('/signup') }} href="#" className="linkstyle" >
                            Sign up here
                        </Link>
                    </Typography>

                </Box>
            
        
        </Grid>
        </Paper>
        </Grid>
        

    );

}

export default Login;
