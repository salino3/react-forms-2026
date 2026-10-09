import React from "react";
import { HeaderApp } from "../../common-app";
import "./charts.styles.scss";

const ChartsLayout: React.FC = () => {
  return (
    <div className="charts-layout">
      <HeaderApp page="Charts" />

      <main className="charts-content">
        <div className="card">
          <h2>Analytics & Charts</h2>
          <p>Visualize your data with interactive charts and graphs.</p>
          <div className="charts-placeholder-grid">
            <div className="chart-placeholder-card">
              <h3>Monthly Sales</h3>
              <div className="chart-visual bar-chart">
                <div className="bar" style={{ height: "40%" }}></div>
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
                <div className="bar" style={{ height: "50%" }}></div>
                <div className="bar" style={{ height: "95%" }}></div>
              </div>
            </div>
            <div className="chart-placeholder-card">
              <h3>User Growth</h3>
              <div className="chart-visual line-chart">
                <div className="line-indicator">Trending Upwards (+15%)</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChartsLayout;
