import React from "react";

export interface RoutePaths {
  DASHBOARD: string;
  CHARTS: string;
  REGISTER_FORM: string;
  ERROR_PAGE: string;
}

export const ROUTE_PATHS: RoutePaths = {
  DASHBOARD: "/",
  CHARTS: "/charts",
  REGISTER_FORM: "/register-form",
  ERROR_PAGE: "*",
};

export interface AppRoute {
  path: string;
  element: React.ReactNode;
}
