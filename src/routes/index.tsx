import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SigIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Landing from '../pages/Landing';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/landing" component={Landing} isPrivate/>
    </Switch>
  );
}

export default Routes;