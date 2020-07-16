import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { About, Contact, Home, Services, Work } from './screens'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about/' component={About} />
      <Route path='/contact/' component={Contact} />
      <Route path='/services/' component={Services} />
      <Route path='/work/' component={Work} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter