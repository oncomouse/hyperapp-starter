import { location } from '@hyperapp/router'
import { DOWN, UP } from '../symbols'

const actions = {
  [DOWN]: () => state => ({ count: state.count - 1 }),
  [UP]: () => state => ({ count: state.count + 1 }),
  location: location.actions,
}

export default actions
