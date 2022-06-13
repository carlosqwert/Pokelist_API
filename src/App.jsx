import React from 'react';
import List from './Pokemons/List/List';
import View from './Pokemons/View/View';
import AppProvider from './AppContext/Provider';
import AppContext from './AppContext/Context';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <h1>
            <Link to="/pokemons/list">Pokelist</Link>
          </h1>
          <AppContext.Consumer>
            {({ user }) => (
              <p>
                {user && user.name}{' '}
                {Object.keys(user.pokedex).length} pokemons
              </p>
            )}
          </AppContext.Consumer>
          <Routes>
            <Route path="/pokemons/list" element={<List/>} />
            <Route
              path="/pokemons/:name"
              element={<View/>}
            />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}


export default App;
