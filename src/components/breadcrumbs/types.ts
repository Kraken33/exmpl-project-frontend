interface Match {
  url: string;
}

export interface BreadcrumbComponent {
  breadcrumbs: Array<{
    breadcrumb: any;
    match: Match;
  }>;
}
