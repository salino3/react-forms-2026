import React from "react";
import { HeaderApp } from "../../common-app";
import "./dashboard.styles.scss";

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <HeaderApp page="Dashboard" />
      <main className="dashboard-content">
        <div className="card">
          <h2>Welcome to the Dashboard</h2>
          <p>This is the main dashboard view of the application.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Users</h3>
              <p className="stat-value">1,248</p>
            </div>
            <div className="stat-card">
              <h3>Revenue</h3>
              <p className="stat-value">$12,450</p>
            </div>
            <div className="stat-card">
              <h3>Active Sessions</h3>
              <p className="stat-value">84</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
