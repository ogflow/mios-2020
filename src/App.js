import React from 'react'
import { connect } from 'react-redux'

import AppRouter from './AppRouter'
import { getAssets } from './actions'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isInitiated: false,
    }
  }

  componentDidMount () {
    const { getAssets } = this.props

    getAssets().then(() => {
      this.setState({
        isInitiated: true
      })
    })
  }

  render() {
    const { isInitiated } = this.state
    
    return isInitiated ? (
      <AppRouter />
    ) : (
      <p>loading...</p>
    )
  }
}

export default connect(null, { getAssets })(App)
