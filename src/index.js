import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import Redux from './Components/Redux'
import store from './Reducers/Reducers'

ReactDOM.render(
  <Provider store={createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
