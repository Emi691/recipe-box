import logo from './logo.svg';
import './App.css';
import UsersContainer from './containers/UsersContainer';
import RecipesContainer from './containers/RecipesContainer';
import IngredientsContainer from './containers/IngredientsContainer';

function App() {
  return (
    <div className="App">
      <UsersContainer />
      <RecipesContainer />
      <IngredientsContainer />
    </div>
  );
}

export default App;
