import React from 'react'
import {
    Router,
    Switch,
    Route,
  } from "react-router-dom";
import history from '../history';
import AddBook from '../components/AddBook'
import BookList from '../components/BookList'

const RouteView = () => {
    return (
        <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/"><AddBook /></Route>
            <Route exact path="/list"><BookList /></Route>
          </Switch>
        </div>
      </Router>
    )
}
export default RouteView;
