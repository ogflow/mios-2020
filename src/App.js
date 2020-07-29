import React from 'react'
import { connect } from 'react-redux'

import AppRouter from './AppRouter'
import { getAssets } from './actions'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isInitiated: true,
    }
  }

  render() {
    const { isInitiated } = this.state
    
    return isInitiated ? (
      <AppRouter />
    ) : (
      <p>loading...</p>
    )
  }

  componentDidMount () {
    this.props.getAssets()
  }
}

export default connect(null, { getAssets })(App)
