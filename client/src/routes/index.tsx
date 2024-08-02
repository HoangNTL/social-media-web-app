import HomePage from '../pages/Home'
import NotFoundPage from '../pages/NotFound'
import RegisterPage from '../pages/Auth/Register'
import LoginPage from '../pages/Auth/Login'

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/register',
    page: RegisterPage
  },
  {
    path: '/login',
    page: LoginPage
  },
  {
    path: '*',
    page: NotFoundPage
  }
]
