import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import Redux from './Components/Redux'
import reducer from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
