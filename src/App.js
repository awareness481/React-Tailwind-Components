import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TabNavigation from './component/tab-navigation/TabNavigation';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/component/tab-navigation'>
          <TabNavigation />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
