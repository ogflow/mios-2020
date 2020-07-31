import { 
  GET_ASSETS, GET_HOME_PAGE, GET_OFFICES, GET_ABOUT_US_PAGE, GET_TEAM_MEMBERS, GET_CONTACT_PAGE
} from '../actions/actionTypes'

const initialState = {
  assets: null,
  projects: null,
  home: null,
  offices: null,
  aboutUs: null,
  teamMembers: null,
  contact: null,
  services: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ASSETS:
      return Object.assign({}, state, {
        assets: action.payload
      })

    case GET_HOME_PAGE:
      return Object.assign({}, state, {
        home: action.payload
      })

    case GET_OFFICES:
      return Object.assign({}, state, {
        offices: action.payload
      })

    case GET_ABOUT_US_PAGE:
      return Object.assign({}, state, {
        aboutUs: action.payload
      })

    case GET_TEAM_MEMBERS:
      return Object.assign({}, state, {
        teamMembers: action.payload
      })

    case GET_CONTACT_PAGE:
      return Object.assign({}, state, {
        contact: action.payload
      })

    default:
      return state
  }
}

export default rootReducer