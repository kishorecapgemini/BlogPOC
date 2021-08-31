import React from 'react'
import { Paper, AppBar, Toolbar, Grid, Box, Avatar, Icon, makeStyles, Button } from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
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

const DashBoard = () => {

    const center = { padding: 0, height: '110vh', width: 250, margin: "20px auto" }
    const paperStylee = { padding: 0, height: '110vh', width: 450 }
    const fontcol = { color: '#696161', fontWeight: 600 }
    const gridstyle = { padding: '0px 180px 0px 0px' }
    const samp = { width: 30, color: '#696161' }
    const fontColor = { color: '#0878ea', fontWeight: '500', fontSize: '20px', margin: '0px 0px 0px 5px' }
    const space = { padding: '40px 0px 0px 0px' }
    const spacebetween = { padding: '10px 0px 0px 20px', color: '#0878ea' }
    const fontcolor = { color: '#0878ea', fontWeight: '500', fontSize: '20px', margin: '0px 0px 0px 5px' }
    const avatarstyle = { padding: '20px 0px 0px 25px' }
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
        <div style={center} onClick={toggleDrawer(false)} >
            <div style={avatarstyle}>
                <h2>

                    <img src="https://pbs.twimg.com/profile_images/938701357879402496/E7c7sjhT_400x400.jpg" alt='' style={{ width: 35, height: 36, borderRadius: 100 / 3, }} align='center' />

                    <span align='top' style={{ padding: '0px 0px 0px 20px', fontWeight: '400' }}>
                        Kishore
                    </span>
                </h2>


            </div>

            <List>

                <ListItem button style={{ color: '#0878ea', fontWeight: '600', padding: '0px 0px 10px 80px' }}>Manage profile</ListItem>
                <div style={{ padding: '0px 0px 40px 0px' }}></div>

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
                <div style={{ padding: '0px 0px 300px 15px' }} />

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

        <Paper elevation={2} style={paperStylee} >
            <AppBar position="static" color="default" >

                <Toolbar >
                    <IconButton aria-label='app'>
                        <div>
                            <Button onClick={toggleDrawer(true)}><Menu style={samp} /></Button>
                            <Drawer
                                anchor={'left'}
                                open={state}
                                onClose={toggleDrawer(false)}>
                                {list()}
                            </Drawer>
                        </div>
                    </IconButton>
                    <Grid align='center' style={gridstyle}>
                        <h2 style={fontcol}><img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" alt="" style={{ width: 35, height: 36, borderRadius: 100 / 3 }} align='center' />     Blog    </h2>

                    </Grid>
                    <Avatar src="https://pbs.twimg.com/profile_images/938701357879402496/E7c7sjhT_400x400.jpg" />
                </Toolbar>
            </AppBar>
            <div align='left' >
                <h8 style={{ margin: "10px 0px 0px 30px", fontWeight: 1200, fontSize: '30px' }}> Hi, Kishore</h8>
            </div>
            <div align='left'>
                <p style={{ margin: "0px 0px 0px 30px", fontSize: '20px', color: '#696161' }}>
                    Here is your dashboard overview, you can easily manage your articles in one place
                </p>
            </div>
            <Box border={1} borderColor='gray' padding='10' width='100' height='45vh' margin='20px 30px auto ' borderRadius='15px'>
                <h5 align='left' style={{ margin: "10px 0px 0px 30px", fontWeight: 500, fontSize: '55px' }}>3</h5>
                <h5 align='left' style={{ margin: "10px 0px 0px 30px", fontWeight: 500, fontSize: '30px' }}>Total articles</h5>

                <p align='left' style={{ margin: "0px 0px 0px 30px", fontSize: '20px', color: '#696161' }}>Add, manage, view articles</p>
                <div align='left' style={space} className={classes.root}>
                    <AddCircleIcon fontSize='medium' style={spacebetween} />
                    <Icon style={fontColor}>Add a new article</Icon>
                </div>
                <div align='left' className={classes.root}>
                    <CreateIcon fontSize='medium' style={spacebetween} />
                    <Icon style={fontcolor}>Manage articles</Icon>
                </div>
            </Box>
        </Paper>
    )
}
export default DashBoard;
