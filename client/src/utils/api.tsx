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

const loginUserApi = async (email: string, password: string) => {
  const URL_API = 'http://localhost:3001/api/login'
  const data = {
    email,
    password
  }

  const response = await axios.post(URL_API, data)
  const token = response.data.accessToken

  localStorage.setItem('accessToken', token)

  return response
}

const getUserDetailsApi = async () => {
  const URL_API = 'http://localhost:3001/api/user'
  const token = localStorage.getItem('accessToken')

  if (!token) {
    throw new Error('No access token found')
  }

  const response = await axios.get(URL_API, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response
}

export { registerUserApi, loginUserApi, getUserDetailsApi }
