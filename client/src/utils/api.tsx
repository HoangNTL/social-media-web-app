import axios from 'axios'

const registerUserApi = (userName: string, email: string, password: string) => {
  const URL_API = 'http://localhost:3001/api/auth/register'
  const data = {
    userName,
    email,
    password
  }

  return axios.post(URL_API, data)
}

export { registerUserApi }
