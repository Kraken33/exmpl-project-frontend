import "assets/styles/app.css";
import "assets/styles/index.scss";

import { App } from "components";
import { ConnectedRouter as ConnectedRouterProvider } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { history } from "routes/history";
import { IntlProvider, initIntl, setIntl } from "services/intl";
import { PermissionProvider } from "services/permission";
import { store } from "store";

setTimeout(() => {
  initIntl();
}, 0);

setTimeout(() => {
  setIntl({
    testKey: "test",
    apiRequestPlaceholder: "Placeholder",
    apiSubmitButtonLabel: "Send",
    apiRequestDataTypeHeader: "Header",
    apiRequestDataTypeJson: "JSON",
  });
  // setPermissions(["home", "login"]);
}, 0);

const rootElement = document.getElementById("root") as HTMLElement;
const render = (
  Component: React.ElementType,
  root: Element,
  done?: () => void
) => {
  ReactDOM.render(
    <PermissionProvider>
      <IntlProvider>
        <ReduxProvider store={store}>
          <ConnectedRouterProvider history={history}>
            <Component />
          </ConnectedRouterProvider>
        </ReduxProvider>
      </IntlProvider>
    </PermissionProvider>,
    root,
    done
  );
};

render(App, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
