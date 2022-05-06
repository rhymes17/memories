import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './comps/home/Home';
import Title from './comps/title/Title';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AuthProvider from './context/auth';
import PrivateRoute from './comps/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Title/>
        <Switch>
          
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
