import React, { Component } from 'react';
import ArticleService from '../services/ArticleService';

class ListArticleComponents extends Component {
    constructor(props){
        super(props)
        this.state = {
            articles : []
        }
    }
    componentDidMount(){
        ArticleService.getArticles().then((res) =>{
            this.setState({articles: res.data});

        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center" >Articles List</h2>
                <div className="row">
                    <table className="table table-stripped table-boardered">
                        <thead>
                            <tr>
                            <th> Id </th>    
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
                                        <td> {articles.id}</td>
                                        <td> {articles.update}</td>
                                        <td> {articles.delete}</td>
                                    </tr>    
                                )
                            }
                        </tbody>
                    </table>
                </div>

                
            </div>
        );
    }
}

export default ListArticleComponents;