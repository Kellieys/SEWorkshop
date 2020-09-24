import React from 'react';
import Forms from './components/Forms';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
          
          <BrowserRouter>
              <Switch>

              <Route exact path="/" component={Dashboard}/>

              <Route exact path="/forms" component={Forms}/>

              </Switch>
          </BrowserRouter>

    </div>
  );
}

export default App;