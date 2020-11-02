export interface IMapStateToProps {}

export interface IMapDispatchToProps {}

interface Breadcrumb {
  key: string;
  get: Function;
}

interface Match {
  url: string;
}

export interface BreadcrumbComponent extends IMapStateToProps, IMapDispatchToProps {
  breadcrumbs: Array<{
    breadcrumb: Breadcrumb;
    match: Match;
  }>;
}
