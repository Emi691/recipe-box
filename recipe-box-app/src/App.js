import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Navbar'
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import RecipesContainer from './containers/RecipesContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recipes" component={RecipesContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
