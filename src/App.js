import React, { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Login = lazy(() => import('./components/Login')) 
const Signup = lazy(() => import('./components/SignUp'))
const DashBoard = lazy(()=> import('./components/Dashboard/Dashboard'))
const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="App">
      <Suspense fallback={renderLoader()}>
        <Router>
          <Switch>

            < Route exact path="/login" component={Login} />
            < Route exact path="/signup" component={Signup} />
            < Route exact path="/dashboard" component={DashBoard}/>
          </Switch>
        </Router>
      </Suspense>



    </div>
  );
}
export default App;
