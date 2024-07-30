import HomePage from '../pages/Home'
import NotFoundPage from '../pages/NotFound'
import RegisterPage from '../pages/Auth/Register'

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/register',
    page: RegisterPage,
    isShowHeader: true
  },
  {
    path: '*',
    page: NotFoundPage
  }
]
