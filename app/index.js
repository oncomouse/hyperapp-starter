import { h, app } from 'hyperapp';
import { withEffects } from 'hyperapp-effects';
import { withLogger } from '@hyperapp/logger';
import actions from './actions';
import state from './state';
import App from './containers/App';
import loadPolyfills from './utilities/loadPolyfills';

const view = s => (
  <App
    state={s}
  />
);

const appifier = process.env.NODE_ENV === 'production' ? withEffects(app) : withLogger(withEffects(app));
loadPolyfills(() => appifier(state, actions, view, document.body));
