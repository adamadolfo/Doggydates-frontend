
import './App.css';
import Welcome from './components/Welcome'
import SwipePage from './components/SwipePage'
import Profile from './components/Profile'
import Matches from './components/Matches'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";



function App() {

 

  const loggedIn = localStorage.getItem("user")




  return (
    <div className="App">
  
      <Router>
        <Switch>
          <Route path="/profile"  component={Profile} />
          <Route path="/matches" component={Matches} />
          <Route path="/swipe" component={SwipePage} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/">
            {loggedIn ? <Redirect to="/swipe" /> : <Redirect to="/welcome" />}
          </Route>
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
