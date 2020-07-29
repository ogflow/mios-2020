import { 
  GET_ASSETS, GET_HOME_PAGE, GET_OFFICES, GET_ABOUT_US_PAGE, GET_TEAM_MEMBERS
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