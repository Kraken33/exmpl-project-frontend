import 'assets/styles/app.css';
import 'assets/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter as ConnectedRouterProvider } from 'connected-react-router';

import { App } from 'components';
import { store } from 'store';
import { history } from 'routes/history';

const root = document.getElementById('root')! as HTMLElement;
const render = (Component: React.ElementType, root: Element, done?: () => void) => {
  ReactDOM.render(
      <ReduxProvider store={store}>
        <ConnectedRouterProvider history={history}>
          <Component />
        </ConnectedRouterProvider>
      </ReduxProvider>,
    root,
    done
  );
};

render(App, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
