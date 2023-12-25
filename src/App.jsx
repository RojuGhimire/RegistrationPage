// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './component/SignUp.jsx';
import Login from './component/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
