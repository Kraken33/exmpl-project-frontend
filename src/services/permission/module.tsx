import { EventEmitter } from "events";

import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { AvailableRoutes } from "routes";
import { redirect } from "utils";
import { error } from "utils/errors";

import { WithAuthenticationOptions, WithPerrmissionOptions } from "./types";

const createEvent = () => {
  const event: any = new EventEmitter();
  const eventName = "permissions:set";

  event.name = eventName;

  return event;
};

const permissionEvent = createEvent();

const PermissionContext = React.createContext([]);

const PermissionProvider: React.FC = ({ children }) => {
  const [permissions, setPerrmissions] = useState([]);
  useEffect(() => {
    permissionEvent.on(permissionEvent.name, (subjectPermissions: []) =>
      Array.isArray(subjectPermissions)
        ? setPerrmissions(subjectPermissions)
        : error("Permission should to be array")
    );

    return () => {
      permissionEvent.removeAllListeners();
    };
  }, []);

  return (
    <PermissionContext.Provider value={permissions}>
      {children}
    </PermissionContext.Provider>
  );
};

const usePermissions = (): string[] => useContext(PermissionContext);

const withAuthentication = ({
  authenticateSelector,
}: WithAuthenticationOptions) => (
  Component: React.ComponentType<any>
): React.ComponentType<any> =>
  connect((state) => ({ isAuthenticate: authenticateSelector(state) }))(
    ({ isAuthenticate }) => {
      useEffect(() => {
        !isAuthenticate && redirect(AvailableRoutes.login);
      }, [isAuthenticate]);
      return isAuthenticate ? <Component /> : <span>401</span>;
    }
  );

const withPermissions = (
  permissionName: string,
  options?: WithPerrmissionOptions
) => (Component: React.ComponentType<any>): React.FC => (props) => {
  const permissions = usePermissions();
  const forbiddenPage = options?.forbiddenPage ? (
    <options.forbiddenPage />
  ) : (
    <span>403</span>
  );

  return permissions.includes(permissionName) ? (
    <Component permissions={permissions} {...props} />
  ) : (
    forbiddenPage
  );
};

export {
  PermissionContext,
  PermissionProvider,
  withPermissions,
  permissionEvent,
  withAuthentication,
};
