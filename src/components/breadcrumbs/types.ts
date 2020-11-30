interface Breadcrumb {
  key: string;
  get: Function;
}

interface Match {
  url: string;
}

export interface BreadcrumbComponent {
  breadcrumbs: Array<{
    breadcrumb: Breadcrumb;
    match: Match;
  }>;
}
