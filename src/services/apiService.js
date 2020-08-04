import axios from 'axios'

const AUTH_TOKEN = process.env.REACT_APP_CONTENTFUL_AUTH_TOKEN
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const ENVIRONMENT_ID = 'master'
const HOME_PAGE_ID = '6MuhwTeJiNrUvzedcC0SQY'
const ABOUT_US_PAGE_ID = '1f9tcPCs97tuqaz24wC0x7'
const CONTACT_PAGE_ID = '4aq9l0ubiQYzLPKFHnbtgP'
const SERVICES_PAGE_ID = 'aY8QZyUqJ06xBwXrOMDcN'

axios.defaults.baseURL = 'https://cdn.contentful.com'
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`

const getAssets = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/assets`)
  .then(res => res.data.items)
}

const getOffices = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?content_type=officeItem`)
  .then(res => res.data.items)
}

const getTeamMembers = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?content_type=teamMember`)
  .then(res => res.data.items)
}

const getServices = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?content_type=serviceItem`)
  .then(res => res.data.items)
}

const getHomePage = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${HOME_PAGE_ID}`)
  .then(res => res.data.fields)
}

const getAbousUsPage = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${ABOUT_US_PAGE_ID}`)
  .then(res => res.data.fields)
}

const getContactPage = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${CONTACT_PAGE_ID}`)
  .then(res => res.data.fields)
}

const getServicesPage = () => {
  return axios.get(`/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries/${SERVICES_PAGE_ID}`)
  .then(res => res.data.fields)
}

const apiService = {
  getAssets,
  getOffices,
  getServices,
  getTeamMembers,
  getHomePage,
  getAbousUsPage,
  getContactPage,
  getServicesPage,
}

export default apiService