import type React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/routes.interface";
import "./header-styles.scss";

interface Props {
  page: string;
}

export const HeaderApp: React.FC<Props> = (props) => {
  const { page } = props;
  const { pathname } = useLocation();

  return (
    <header className="rootHeaderApp">
      <h1>{page}</h1>
      <nav className="rootHeaderAppNav">
        <Link
          to={ROUTE_PATHS.DASHBOARD}
          className={`nav-link ${pathname == ROUTE_PATHS.DASHBOARD ? "active" : ""}`}
        >
          Dashboard
        </Link>
        <Link
          to={ROUTE_PATHS.CHARTS}
          className={`nav-link ${pathname == ROUTE_PATHS.CHARTS ? "active" : ""}`}
        >
          Charts
        </Link>
        <Link
          to={ROUTE_PATHS.REGISTER_FORM}
          className={`nav-link ${pathname == ROUTE_PATHS.REGISTER_FORM ? "active" : ""}`}
        >
          Forms
        </Link>
      </nav>
    </header>
  );
};
