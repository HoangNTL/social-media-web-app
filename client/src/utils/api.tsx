import axios from 'axios'

const registerUserApi = (userName: string, email: string, password: string) => {
  const URL_API = 'http://localhost:3001/api/register'
  const data = {
    userName,
    email,
    password
  }

  return axios.post(URL_API, data)
}

const loginUserApi = (email: string, password: string) => {
  const URL_API = 'http://localhost:3001/api/login'
  const data = {
    email,
    password
  }

  return axios.post(URL_API, data)
}

export { registerUserApi, loginUserApi }
