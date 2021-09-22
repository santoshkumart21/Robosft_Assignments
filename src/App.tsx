import React from 'react';
import logo from './logo.svg';
import { Router, Switch, Route } from "react-router-dom";
import './App.css';
import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';

function App() {

  return (
    <div >  
      <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Step1} />
                    <Route path="/step2" component={Step2} />
                    <Route path="/step3" component={Step3} />
                </Switch>
            </Router>
     {/* <Step2 /> */}
    </div>
  );
}

export default App;
