import React from "react";
import {} from "../styles/Dashboard.styles.jsx";
import Navbar from "../components/Navbar";
import Busser from "../components/Busser.jsx";
import Server from "../components/Server.jsx";
import Host from "../components/Host.jsx";

// Once we create the different components for the employees
// Import the components, include a auth for viewing using role
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div
        className="view-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        //   height: "100vh",
          maxWidth: "900px",
          margin: "0 auto",

        }}
      >
        <Busser />
      </div>
    </div>
  );
};

export default Dashboard;
