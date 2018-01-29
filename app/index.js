import { h, app } from 'hyperapp'
import { withEffects } from 'hyperapp-effects'
import actions from './actions'
import state from './state'
import App from './containers/App'

const view = state => (
    <App
        state={state}
	/>
)

withEffects(app)(state, actions, view, document.body)