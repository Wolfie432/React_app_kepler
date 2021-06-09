import React from 'react';
import {render} from 'react-dom';
import Kepler from './kepler_gl';
import DeckGL from '@deck.gl/react';
import {MapView} from '@deck.gl/core';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer, PathLayer} from '@deck.gl/layers';
import { Button } from 'reactstrap';
import Deck from './Deck_gl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/users">Deck.gl</Link>
          </li>
          <li>
              <Link to="/about">Kepler.gl</Link>
            </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/about">
            <Kepler />
          </Route>
        <Route path="/users">
          <Deck />
        </Route>
      </Switch>
    </div>
  </Router>
      
  );
}
function Users() {
  return <h2>Users</h2>;
}
function About() {
  return <h2>About</h2>;
}

export function renderToDOM(container) {
  render(<App />, container);
}
//<Button color="primary"> Button </Button>
//<Deck />