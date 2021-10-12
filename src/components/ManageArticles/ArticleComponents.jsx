import React, { Component } from 'react';
import { Grid,Paper, AppBar, Toolbar,Button,Link } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './ArticleService'
import ArticleService from './ArticleService';

class ArticleComponents extends Component {
    constructor(props){
        super(props)

        this.state = {
            articles:[]
        }
        
    }
    editArticle(){

    }
    componentDidMount(){
        ArticleService.getArticles().then((res) =>{
            this.setState({articles: res.data});

        });
    }
    
    render() {
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
            <div>
                
                <div className="row">
                    <table className="table table-stripped table-boardered">
                        <thead>
                            <tr>
                              
                            <th> Update Article  </th>
                            <th> Delete Article </th>
                            <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.articles.map(
                                    articles =>
                                    <tr key = {articles.id}>
                                        
                                        <td> {articles.update}</td>
                                        <td> {articles.delete}</td>
                                        <td>
                                            <button onClick={()=>this.editArticle(articles.id)} className="btn btn-info">Update</button>
                                        </td>
                                        <td>
                                            <button onClick={()=>this.editArticle(articles.id)} className="btn btn-info">Delete</button>
                                        </td>
                                    </tr>    
                                )
                            }
                        </tbody>
                    </table>
                </div>

                
            </div>

            </Grid>
            </Paper>
        </Grid>
        );
    }
}

export default ArticleComponents;