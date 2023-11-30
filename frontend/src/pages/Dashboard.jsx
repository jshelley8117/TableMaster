import React from "react";
import { useSelector } from "react-redux";
import {} from "../styles/Dashboard.styles.jsx";
import Navbar from "../components/Navbar";
import Busser from "../components/Busser.jsx";
import Server from "../components/Server.jsx";
import Host from "../components/Host.jsx";
import Admin from "../components/Admin.jsx";

// Once we create the different components for the employees
// Import the components, include a auth for viewing using role
const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);

  if (user.role === 'busser'){
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
  } 
  else if (user.role === 'host'){
    return(
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
        <Host />
      </div>
    </div>
    );
  }
  else if ( user.role === 'server'){
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

        <Server />
      </div>
    </div>
    );
  }
  else if ( user.role === 'admin'){
    return (
      <div>
        <Navbar />
        <Admin />
      </div>
      

    )
  }
  else{
    return(
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
      <h1> You are not assigned a role</h1>
      </div>
    </div>
    )
  }

  // return (
  //   <div>
  //     <Navbar />
  //     <div
  //       className="view-container"
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "flex-start",
  //       //   height: "100vh",
  //         maxWidth: "900px",
  //         margin: "0 auto",

  //       }}
  //     >

  //       <Busser />
  //     </div>
  //   </div>
  // );
};

export default Dashboard;
