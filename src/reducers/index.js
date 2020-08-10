import { 
  GET_ASSETS, GET_OFFICES, GET_TEAM_MEMBERS, GET_SERVICES, GET_PROJECTS, GET_CONTENT_BLOCKS, GET_HOME_PAGE, GET_ABOUT_US_PAGE, GET_CONTACT_PAGE, GET_SERVICES_PAGE, GET_PROJECTS_PAGE
} from '../actions/actionTypes'

const initialState = {
  assets: null,
  projects: null,
  contentBlocks: null,
  offices: null,
  services: null,
  teamMembers: null,
  homePage: null,
  aboutUsPage: null,
  contactPage: null,
  servicesPage: null,
  projectsPage: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ASSETS:
      return Object.assign({}, state, {
        assets: action.payload
      })

    case GET_PROJECTS:
      return Object.assign({}, state, {
        projects: action.payload
      })

    case GET_CONTENT_BLOCKS:
      return Object.assign({}, state, {
        contentBlocks: action.payload
      })

    case GET_OFFICES:
      return Object.assign({}, state, {
        offices: action.payload
      })

    case GET_TEAM_MEMBERS:
      return Object.assign({}, state, {
        teamMembers: action.payload
      })

    case GET_SERVICES:
      return Object.assign({}, state, {
        services: action.payload
      })

    case GET_HOME_PAGE:
      return Object.assign({}, state, {
        homePage: action.payload
      })

    case GET_ABOUT_US_PAGE:
      return Object.assign({}, state, {
        aboutUsPage: action.payload
      })


    case GET_CONTACT_PAGE:
      return Object.assign({}, state, {
        contactPage: action.payload
      })

    case GET_SERVICES_PAGE:
      return Object.assign({}, state, {
        servicesPage: action.payload
      })

    case GET_PROJECTS_PAGE:
      return Object.assign({}, state, {
        projectsPage: action.payload
      })

    default:
      return state
  }
}

export default rootReducer