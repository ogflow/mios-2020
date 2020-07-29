import axios from 'axios'

const AUTH_TOKEN = process.env.REACT_APP_CONTENTFUL_AUTH_TOKEN
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const ENVIRONMENT_ID = 'master'
const HOME_PAGE_ID = '6MuhwTeJiNrUvzedcC0SQY'
const ABOUT_US_PAGE_ID = '1f9tcPCs97tuqaz24wC0x7'

axios.defaults.baseURL = 'https://cdn.contentful.com'
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`

const getAssets = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/assets`)
  .then(res => res.data.items)
}

const getHomePage = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${HOME_PAGE_ID}`)
  .then(res => res.data.fields)
}

const getOffices = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?content_type=officeItem`)
  .then(res => res.data.items)
}

const getAbousUsPage = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${ABOUT_US_PAGE_ID}`)
  .then(res => res.data.fields)
}

const getTeamMembers = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?content_type=teamMember`)
  .then(res => res.data.items)
}

const apiService = {
  getAssets,
  getHomePage,
  getOffices,
  getAbousUsPage,
  getTeamMembers,
}

export default apiService