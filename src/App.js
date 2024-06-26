import "./App.css";

import maintenanceSvg from "./assets/maintenance.svg";
import logo from "./assets/pbt-nav-logo.svg";

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <div>
          <p className="title">We Are Upgrading!</p>
          <p className="desc">
            Our site is under maintenance as we're preparing to serve you better
          </p>
        </div>
        <img className="img" src={maintenanceSvg} alt="" />
      </div>
    </div>
  );
}

export default App;
