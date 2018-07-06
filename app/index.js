import { h, app } from 'hyperapp';
import { withEffects } from 'hyperapp-effects';
import actions from './actions';
import state from './state';
import App from './containers/App';
import loadPolyfills from './utilities/loadPolyfills';

const view = s => (
  <App
    state={s}
  />
);

const appifier = withEffects(app);
// let main;
loadPolyfills(() => {
  (process.env.NODE_ENV === 'production'
    ? appifier
    // eslint-disable-next-line global-require
    : require('@hyperapp/logger').default({})(appifier))(state, actions, view, document.body);
});
