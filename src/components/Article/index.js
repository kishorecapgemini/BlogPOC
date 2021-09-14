import React, {useMemo} from 'react'
import { Grid,Paper, AppBar, Toolbar,Box, Avatar, Button,TextField,Link } from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon } from '@material-ui/core/';
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {useDropzone} from 'react-dropzone';
import * as Yup from 'yup'

import './index.scss'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

const Article = (props) => {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles,
        fileRejections
      } = useDropzone({accept: ['image/jpeg, image/png','video/*','.pdf'],
                       maxSize: 10240 * 1024 // 10 MB
    });
    
      const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
      ]);
      const filesAcc = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
      const filesRej = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => (
              <li key={e.code}>{e.message}</li>
            ))}
          </ul>
        </li>
      ));
    
    
    const initialValues = {
        title: '',
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
        title: Yup.string('Please enter  title').required('Required'),
        description: Yup.string('Please enter description').required('Required')
    })
    

    const [state, setState] = React.useState(false)
    const toggleDrawer = (open) => (event) => {
        setState(open)
    }
    const list = () => (
        <div className="leftStyle"  onClick={toggleDrawer(false)} >
            <div className="avatarStyle">
                <h2>

                    <img src="https://pbs.twimg.com/profile_images/938701357879402496/E7c7sjhT_400x400.jpg" alt='' style={{ width: 35, height: 36, borderRadius: 100 / 3, }} align='center' />

                    <span align='top' className="spanStyle" >
                        Kishore
                    </span>
                </h2>


            </div>

            <List>

                <ListItem button className="buttonStyle"  >Manage profile</ListItem>
                <div className="divStyle" ></div>

                <ListItem button >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>

                <ListItem button >
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Articles"} />
                </ListItem>
                <div className="divStyle2" />

                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Settings"} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Support"} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>
        </div>
    )
    return (
        <Grid>
             <Paper elevation={10} className="paperStyle">
        <Grid className="grids">

        
            <AppBar position="sticky" color="default" >

                <Toolbar >
                    
                        <div>
                            <Button onClick={toggleDrawer(true)}><Menu className="menuStyle" /></Button>
                            <Drawer
                                anchor={'left'}
                                open={state}
                                onClose={toggleDrawer(false)}>
                                {list()}
                            </Drawer>
                        </div>
                    
                    <div align='center' className="gridstyle" >
                        <h2 className="fontcol" ><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" alt="" style={{ width: 35, height: 36, borderRadius: 100 / 3 }} align='center' />     Blog    </h2>

                    </div>
                    <Avatar src="https://pbs.twimg.com/profile_images/938701357879402496/E7c7sjhT_400x400.jpg" />
                </Toolbar>
            </AppBar>
            <div className="div-style"/>
            <div align='left' >
                <Link href="./dashboard" style={{margin: '10px 0px 0px 30px'}}>Home </Link>
                <Link href="./article"> / Add a new article</Link><br></br>
                <p className="headingStyle3" > Add new article</p>
            </div>
            <div align='left'>
                <p className="styleA" >
                    Start adding article by adding image,<br></br> description. Give them some awesome<br/> learning resources curated by you.
                </p>
            </div>
            <Box border={1} className="box-style" padding='10px 10px 10px 10px' width='350px' height= '70vh' margin= '30px auto' borderRadius='15px' borderColor='gray'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} id="outlined-basic" label='Title' name='title'
                                    variant="outlined" placeholder='Enter title' fullWidth margin='normal' size="medium" 
                                    autoComplete="off"
                                    helperText={<ErrorMessage name='title' />}
                                />
                                <Field as={TextField} className="description" id="outlined-basic" label='Description' name='description'
                                    variant="outlined" placeholder='Enter description' fullWidth margin='normal' size="medium" 
                                    autoComplete="off"
                                    multiline rows={4}
                                    helperText={<ErrorMessage name='description' />}
                                />
                                </Form>
                        )}
                        </Formik>
                        <div className="container">
                            <div {...getRootProps({ style })}>
                                    <input {...getInputProps()} />
                                    <div className="spacebet"/>
                                    <CloudUploadIcon fontSize="large" />
                                    <p className="font-weight"> Upload a file <br></br>File should be lessthan 10mb </p>
                                    
                            </div>
                                    <aside> 
                                        <ul>{filesAcc}</ul>     
                                        <ul>{filesRej}</ul>
                                    </aside>
                        </div>
                        

                        <Button variant="contained"  color="primary"  type='submit'  fullWidth style={{textTransform:'none'}}  className="btnstyle" >Submit</Button>
            </Box>
            
        
        </Grid>
        </Paper>
        </Grid>
    )
}

export default Article;