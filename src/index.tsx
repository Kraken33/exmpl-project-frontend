import "assets/styles/app.css";
import "assets/styles/index.scss";

import { App } from "components";
import { ConnectedRouter as ConnectedRouterProvider } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { history } from "routes/history";
import { IntlProvider, intlInit, intlSet } from "services/intl";
import { store } from "store";

setTimeout(() => {
  intlInit();
}, 2000);

setTimeout(() => {
  intlSet({
    test: "test",
    apiRequestPlaceholder: "Placeholder",
    apiSubmitButtonLabel: "Send",
    apiRequestDataTypeHeader: "Header",
    apiRequestDataTypeJson: "JSON",
  });
}, 5000);

const rootElement = document.getElementById("root") as HTMLElement;
const render = (
  Component: React.ElementType,
  root: Element,
  done?: () => void
) => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <ConnectedRouterProvider history={history}>
        <IntlProvider>
          <Component />
        </IntlProvider>
      </ConnectedRouterProvider>
    </ReduxProvider>,
    root,
    done
  );
};

render(App, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
