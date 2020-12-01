import { permissionEvent } from "./module";

const setPermissions = (permissions: string[]): void =>
  permissionEvent.emit(permissionEvent.name, permissions);

export { setPermissions };
