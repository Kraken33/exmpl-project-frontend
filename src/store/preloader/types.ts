export interface PreloaderStore<T = string> {
  list: Array<string>;
}

export interface IAddPreloaderPayload {
  preloaderName: string;
}

export interface IRemovePreloaderPayload {
  preloaderName: string;
}
