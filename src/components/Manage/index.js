import React from 'react'
import { Grid,Paper, AppBar, Toolbar,Button,Link } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './index.scss'

const Manage =() =>{
    
    return (
        <Grid>
             <Paper elevation={10} className="paperStyle">
        <Grid className="grids">

        <AppBar position="sticky" color="default" >

                <Toolbar >
                    <Button href="./dashboard" style={{color:'#696161'}} className="button-style">
                    <ArrowBackIcon fontSize="medium"/>
                    </Button>

                </Toolbar>
                
            </AppBar>
            <div className="div-style"/>
            <div align='left' >
                <Link href="./dashboard" style={{margin: '10px 0px 0px 30px'}}>Home </Link>
                <Link href="./manage"> / Manage articles</Link><br></br>
                <p className="headingStyle3" > Manage articles</p>
            </div>
            <div align='left'>
                <p className="pStyle" >
                    Easily manage all your articles here.
                </p>
            </div>

            </Grid>
            </Paper>
        </Grid>    
    )

}

export default Manage;