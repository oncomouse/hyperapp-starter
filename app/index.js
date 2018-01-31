import { h, app } from 'hyperapp'
import { withEffects } from 'hyperapp-effects'
import actions from './actions'
import state from './state'
import App from './containers/App'
import loadPolyfills from './utilities/loadPolyfills'

const view = state => (
    <App
        state={state}
    />
)

const appifier = withEffects(app);
let main
loadPolyfills(() => {
    main = (process.env.NODE_ENV === 'production' ?
        appifier
        : require('@hyperapp/logger').default({})(appifier))(state, actions, view, document.body)
})