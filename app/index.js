import { h, app } from 'hyperapp'
import { withFx } from '@hyperapp/fx'
import { withLogger } from '@hyperapp/logger'
import { withContext } from 'hyperapp-context'
import { location } from '@hyperapp/router'
import {
  compose,
  ifElse,
  always,
  identity,
} from 'ramda'
import actions from './actions'
import state from './state'
import Router from './router'
import loadPolyfills from './utilities/loadPolyfills'

const dressApp = compose(
  ifElse(always(process.env.NODE_ENV === 'production'), identity, withLogger),
  withContext,
  withFx,
)
const view = state => (context, setContext) => {
  setContext({
    count: state.count,
    location: state.location,
  })
  return (
    <Router />
  )
}

loadPolyfills(() => {
  const main = dressApp(app)(state, actions, view, document.body)
  location.subscribe(main.location)
})
