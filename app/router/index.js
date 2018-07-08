import { h } from 'hyperapp'
import { Route } from '@hyperapp/router'
import Home from '../pages/Home'

const Router = () => (
  <Route path="/" render={Home} />
)

export default Router
