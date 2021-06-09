import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider } from "react-redux";
import KeplerGl from "kepler.gl";
//import { addDataToMap } from "kepler.gl/actions";
//import useSwr from "swr";
import {Switch, Route, Redirect } from 'react-router-dom';

const reducers = combineReducers({
  keplerGl: keplerGlReducer
});

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));

export default function Kepler() {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}

function Map() {
  return (
    <KeplerGl
      id="covid"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
}


/*
import React from 'react';
import {render} from 'react-dom';
import Kepler from './kepler_gl';
import DeckGL from '@deck.gl/react';
import {MapView} from '@deck.gl/core';
import {TileLayer} from '@deck.gl/geo-layers';
import {BitmapLayer, PathLayer} from '@deck.gl/layers';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import Deck from './Deck_gl'

const showDeck=()=>{
  if (window.location.name==="http://localhost:8080/home"){
    return <Deck />
  }
}

export default function App() {
  return (
    <div className="ui container">
      {showDeck()}
    </div>
      
  );
}

export function renderToDOM(container) {
  render(<App />, container);
}
//<Button color="primary"> Button </Button>
//<Deck />
*/

