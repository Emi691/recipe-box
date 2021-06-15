import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Navbar'
import Home from './containers/Home'
import About from './components/About'
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout'
import RecipesContainer from './containers/RecipesContainer';
import FullRecipe from './components/FullRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/recipes" component={RecipesContainer} />
          <Route path="/recipes/:recipeId" component={FullRecipe} />
        </div>
      </Router>
    </div>
  );
}

export default App;
