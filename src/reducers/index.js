import { GET_ASSETS, GET_OFFICES, GET_HOME_PAGE } from '../actions/actionTypes'

const initialState = {
  assets: null,
  projects: null,
  offices: null,
  home: null,
  about: null,
  contact: null,
  services: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ASSETS:
      return Object.assign({}, state, {
        assets: action.payload
      })

    case GET_OFFICES:
      return Object.assign({}, state, {
        offices: action.payload
      })

    case GET_HOME_PAGE:
      return Object.assign({}, state, {
        home: action.payload
      })

    default:
      return state
  }
}

export default rootReducer