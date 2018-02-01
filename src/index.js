import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/reducers/index';

/* eslint-disable */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const RenderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
/* eslint-enable */

ReactDOM.render(<RenderApp />, document.getElementById('root'));
registerServiceWorker();
