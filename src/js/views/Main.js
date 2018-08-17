import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'Views/Home';
import Methods from 'Views/Methods';
import Matching from 'Views/Matching';
import Experiments from 'Views/Experiments';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/methods' component={ Methods }/>
      <Route path='/matching' component={ Matching }/>
      <Route path='/experiment' component={ Experiments }/>
    </Switch>
  </main>
)

export default Main
