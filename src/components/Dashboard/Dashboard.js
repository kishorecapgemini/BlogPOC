import React from 'react'
import { AppBar,Paper, Toolbar,Box, Avatar, Icon,Link, makeStyles, Button, Grid } from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'
import CreateIcon from '@material-ui/icons/Create';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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
import { useHistory } from 'react-router-dom';
import './index.scss'

const DashBoard = () => {
    let history = useHistory();
    
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > span': {
                margin: theme.spacing(7),
            },
        },
    }));
    const classes = useStyles();

    const [state, setState] = React.useState(false)
    const toggleDrawer = (open) => (event) => {
        setState(open)
    }
    const list = () => (
        <div className="leftStyle"  onClick={toggleDrawer(false)} >
            <div className="avatarStyle">
                <h2>

                    <img src="https://pbs.twimg.com/profile_images/938701357879402496/E7c7sjhT_400x400.jpg" alt=''className="imagestyle" align='center' />

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
            <div className="appbarstyle">
            <AppBar  position="static" color="default">

                <Toolbar >                
                            <Button  onClick={toggleDrawer(true)}><Menu className="menuStyle" /></Button>
                            <Drawer
                                anchor={'left'}
                                open={state}
                                onClose={toggleDrawer(false)}>
                                {list()}
                            </Drawer>                      
                    
                    <div align='center' className="gridstyle" >
                        <h2 className="fontcol" ><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" alt="" style={{ width: 35, height: 36, borderRadius: 100 / 3 }} align='center' />     Blog    </h2>

                    </div>
                    <Avatar src="https://pbs.twimg.com/profile_images/938701357879402496/E7c7sjhT_400x400.jpg" />
                </Toolbar>
            </AppBar>
            </div>
            <div align='left' >
                <p className="headingStyle3" > Hi, Kishore</p>
            </div>
            <div align='left'>
                <p className="pstyle" >
                    Here is your dashboard overview, you can easily manage your articles in one place
                </p>
            </div>
            <Box border={1} className="box-style" borderColor='gray' padding='10px 0px 30px 0px' width='350px' height='35vh' margin='30px auto' borderRadius='15px'>
                <h5 align='left' className="headingStyle1">3</h5>
                <h5 align='left' className="headingStyle2">Total articles</h5>

                <p align='left' className="pstyle2" >Add, manage, view articles</p>
                <div className="space" >
                 </div>   
                <div align='left'   className={classes.root}>
                    <AddCircleIcon fontSize='medium' className="spacebetween" />
                    <Link>
                    <Icon className="iconStyle" href="#" onClick={() => {history.push("/article"); }}>Add a new article</Icon>
                    </Link>
                    
                </div>
                <div align='left'  className={classes.root}>
                    <CreateIcon fontSize='medium' className="spacebetween2"  />
                    <Link>
                    <Icon className="iconStyle2" href="#" onClick={() => {history.push("/manage"); }}>Manage articles</Icon>
                    </Link>
                </div>
            </Box>
        
        </Grid>
        </Paper>
        </Grid>
    )
}
export default DashBoard;
