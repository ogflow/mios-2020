import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { About, Contact, Home, Projects, Services } from './screens'

const AppRouter = () => {
  const origin = process.env.PUBLIC_URL
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={origin + '/'} component={Home} />
        <Route path={origin + '/about'} component={About} />
        <Route path={origin + '/contact'} component={Contact} />
        <Route path={origin + '/services'} component={Services} />
        <Route path={origin + '/projects'} component={Projects} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter