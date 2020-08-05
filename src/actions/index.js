import { 
  GET_ASSETS, GET_OFFICES, GET_TEAM_MEMBERS, GET_SERVICES, GET_PROJECTS,
  GET_HOME_PAGE, GET_ABOUT_US_PAGE, GET_CONTACT_PAGE, GET_SERVICES_PAGE, GET_PROJECTS_PAGE
} from './actionTypes'
import { apiService, utils } from '../services'

export function getAssets() {
  return function (dispatch, getState) {
    const cachedData = getState().assets

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_ASSETS,
        payload: cachedData
      }))
    ) : (
      apiService.getAssets()
      .then(res => {
        dispatch({
          type: GET_ASSETS,
          payload: res
        })
      })
    )
  }
}

export function getProjects() {
  return function (dispatch, getState) {
    const cachedData = getState().projects

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_PROJECTS,
        payload: cachedData
      }))
    ) : (
      apiService.getProjects()
      .then(res => {
        dispatch({
          type: GET_PROJECTS,
          payload: res
        })
      })
    )
  }
}

export function getOffices() {
  return function (dispatch, getState) {
    const cachedData = getState().offices
    
    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_OFFICES,
        payload: cachedData
      }))
    ) : (
      apiService.getOffices()
      .then(res => {
        dispatch({
          type: GET_OFFICES,
          payload: res
        })
      })
    )
  }
}

export function getTeamMembers() {
  return function (dispatch, getState) {
    const cachedData = getState().teamMembers

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_TEAM_MEMBERS,
        payload: cachedData
      }))
    ) : (
      apiService.getTeamMembers()
      .then(res => {
        dispatch({
          type: GET_TEAM_MEMBERS,
          payload: res
        })
      })
    )
  }
}

export function getServices() {
  return function (dispatch, getState) {
    const cachedData = getState().services

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_SERVICES,
        payload: cachedData
      }))
    ) : (
      apiService.getServices()
      .then(res => {
        dispatch({
          type: GET_SERVICES,
          payload: res
        })
      })
    )
  }
}

export function getHomePage() {
  return function (dispatch, getState) {
    const cachedData = getState().home

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_HOME_PAGE,
        payload: cachedData
      }))
    ) : (
      apiService.getHomePage()
      .then(res => {
        dispatch({
          type: GET_HOME_PAGE,
          payload: res
        })
      })
    )
  }
}

export function getAboutUsPage() {
  return function (dispatch, getState) {
    const cachedData = getState().aboutUs

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_ABOUT_US_PAGE,
        payload: cachedData
      }))
    ) : (
      apiService.getAbousUsPage()
      .then(res => {
        dispatch({
          type: GET_ABOUT_US_PAGE,
          payload: res
        })
      })
    )
  }
}

export function getContactPage() {
  return function (dispatch, getState) {
    const cachedData = getState().contact

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_CONTACT_PAGE,
        payload: cachedData
      }))
    ) : (
      apiService.getContactPage()
      .then(res => {
        dispatch({
          type: GET_CONTACT_PAGE,
          payload: res
        })
      })
    )
  }
}

export function getServicesPage() {
  return function (dispatch, getState) {
    const cachedData = getState().servicesPage

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_SERVICES_PAGE,
        payload: cachedData
      }))
    ) : (
      apiService.getServicesPage()
      .then(res => {
        dispatch({
          type: GET_SERVICES_PAGE,
          payload: res
        })
      })
    )
  }
}

export function getProjectsPage() {
  return function (dispatch, getState) {
    const cachedData = getState().projectsPage

    return !!cachedData ? (
      utils.returnPromise(dispatch({
        type: GET_PROJECTS_PAGE,
        payload: cachedData
      }))
    ) : (
      apiService.getProjectsPage()
      .then(res => {
        dispatch({
          type: GET_PROJECTS_PAGE,
          payload: res
        })
      })
    )
  }
}