import { Box, Button, Grid,Paper,TextField, FormControlLabel, Checkbox, Typography, Link } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import './index.scss'

const Signup = () => {
    let history = useHistory();

    const initialValues = {
        emailaddress: '',
        password: '',
        termsAndpolicy: false
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
        password: Yup.string().min(8, 'Password minimum lenght should be 8').required('Required'),
        termsAndpolicy: Yup.string().oneOf(['true'], 'Accept terms & policies')
    })


    return (
        <Grid>
        <Paper elevation={10} className="paperStyle">
        <Grid className="gridStyle">
            
                <Box border={1} className="box-style" borderColor="gray" style={{padding:'50px 20px 20px 20px',width:'320px',height:'50vh',borderRadius:'15px'}}  >
                    <Grid align='center'>
                        <h2 className="fontcol" ><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" alt="" style={{ width: 35, height: 36, borderRadius: 100 / 3 }} align='center' />     Blog   </h2>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>

                                <Field as={TextField} id="outlined-basic" fullWidth label='Email address' name='emailaddress'
                                    variant="outlined" placeholder='Enter email address' margin='normal' size="medium"
                                    autoComplete="off"
                                    helperText={<ErrorMessage name='emailaddress' />}
                                />

                                <Field as={TextField} id="outlined-basic" fullWidth label='New password' name='password'
                                    variant="outlined" placeholder='Enter new password' type='password' margin='normal' size="medium"
                                    helperText={<ErrorMessage name='password' />}
                                />

                                <Typography align="left" className="fontColor" >
                                    <FormControlLabel
                                        control={
                                            <Field as={Checkbox} className="checkStyle" name='termsAndpolicy'
                                                size="medium"

                                                style={{ color: '#0878ea', padding: '10px 0px 0px 10px' }}
                                            />
                                        } />


                                    <Grid className="sam" >
                                        By signing up, you are agreeing to <br></br>the
                                        <Link onClick={() => {history.push("/terms") }} href="#" className="linkstl" >
                                            {"      "}terms of service
                                        </Link> & <Link onClick={() => {history.push("/privacy") }} href="#" className="linkstle">
                                            privacy policy
                                        </Link>.
                                    </Grid>

                                </Typography>

                                <Button type='submit' variant='contained' color='primary' fullWidth style={{textTransform:'none'}} className="btnstyle">Sign Up</Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
                <Typography className="bt"> Have an account?
                    <Link onClick={() => { history.push('/login') }} href="#" className="linkstyle">
                        Sign in here
                    </Link>
                </Typography>
        
        </Grid>
        </Paper>
        </Grid>

    )


}

export default Signup;
