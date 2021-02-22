import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Category from './Category'
import Java from '../content/java/Java';
import Springboot from '../content/springboot/Springboot';
import Postgres from '../content/postgresql/Postgres';
import Linux from '../content/linux/Linux';
import Git from '../content/git/Git';
import Docker from '../content/docker/Docker';
import Home from '../page/Home';
import Reactjs from '../content/react/Reactjs';

const App = () => {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-left">
            <Category />
          </div>

          <div className="App-right">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/java">
                <Java />
              </Route>
              <Route path="/springboot">
                <Springboot />
              </Route>
              <Route path="/postgres">
                <Postgres />
              </Route>
              <Route path="/linux">
                <Linux />
              </Route>
              <Route path="/git">
                <Git />
              </Route>
              <Route path="/docker">
                <Docker />
              </Route>
              <Route path="/reactjs">
                <Reactjs />
              </Route>

            </Switch>
          </div>

        </header>
      </div>
    </Router>
  );
}

export default App;
