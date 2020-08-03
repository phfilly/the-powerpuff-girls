import React from 'react';
import './App.css';
import MediaDetail from './components/media-detail/MediaDetail';
import MediaContainer from './components/media-container/MediaContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MediaContainer />
          </Route>
          <Route path="/media/:id">
            <MediaDetail />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;