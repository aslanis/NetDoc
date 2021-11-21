import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import NetDoc from './app/net-doc';
import { RestService } from './services/rest-service';
import { RestServiceProvider } from './contexts/rest-service-context';

import store from './app/store';

const restService = new RestService();

ReactDOM.render(
  <Provider store={store}>
      <RestServiceProvider value={restService}>
        <Router>
          <NetDoc />
        </Router>
      </RestServiceProvider>
  </Provider>,
  document.getElementById('root')
);
