# Adding @hyperapp/router

To install, run `yarn add @hyperapp/router` or `npm install @hyperapp/router`.

### Editing Files

**`app/actions/index.js`**

Change to look like:

~~~javascript
import { location } from '@hyperapp/router'
import { DOWN, UP } from '../symbols'

const actions = {
    [DOWN]: () => state => ({ count: state.count - 1 })
    , [UP]: () => state => ({ count: state.count + 1 })
    , location: location.actions
}

export default actions
~~~

**`app/state/index.js`**

Change to look like:

~~~javascript
import { location } from '@hyperapp/router'
const state = {
    count: 0
	, location: location.state
}

export default state
~~~

**`app/index.js`**

~~~javascript
import { h, app } from 'hyperapp'
import { withEffects } from 'hyperapp-effects'
import { location } from '@hyperapp/router'
import actions from './actions'
import state from './state'
import App from './containers/App'

const view = state => (
    <App
        state={state}
    />
)

const appifier = withEffects(app);
const main = (process.env.NODE_ENV === 'production' ?
    appifier
    : require('@hyperapp/logger').default({})(appifier))(state, actions, view, document.body)
const unsubscribe = location.subscribe(main.location)
~~~