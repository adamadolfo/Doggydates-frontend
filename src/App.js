
import './App.css';
import SwipePage from './components/SwipePage'
import Profile from './components/Profile'
import Matches from './components/Matches'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/matches" component={Matches} />
          <Route exact path="/" component={SwipePage} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
