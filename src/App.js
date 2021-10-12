import React, { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/Article';
import Manage from './components/Manage';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import UpdateArticleComponent from './components/UpdateArticleComponent';
/*
import ListArticleComponents from './components/ListArticleComponents';
*/
const Login = lazy(() => import('./components/Login')) 
const Signup = lazy(() => import('./components/SignUp'))
const DashBoard = lazy(()=> import('./components/Dashboard/Dashboard'))
const ManageArticles = lazy(()=> import('./components/ManageArticles/ArticleComponents'))
const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="App">
      <Suspense fallback={renderLoader()}>
        <Router>
          <Switch> localhost:3000/updatearticle/
            < Route exact path="/login" component={Login} />
            < Route exact path="/signup" component={Signup} />
            < Route exact path="/dashboard" component={DashBoard}/>
            < Route exact path="/article" component={Article}/>
            < Route exact path ="/manage" component={Manage}/>
            < Route exact path ="/terms" component={Terms} />
            < Route exact path ="/privacy" component={Privacy} />
            < Route exact path ="/managearticles" component={ManageArticles}/>
            < Route exact path ="/updatearticle/:id" component={UpdateArticleComponent}/>

          
          </Switch>
        </Router>
      </Suspense>



    </div>
  );
}
export default App;
