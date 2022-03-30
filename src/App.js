import logo from "./bclogonew.png";
import "./App.css";
import React from "react";
import Home from "./Screens/Home";
import ReturnDetails from "./components/FormComponents/ReturnDetails";

function App() {  
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" width="30" height="24"></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-shrink-0"><Home /></main>
      {/* <main className="flex-shrink-0"><ReturnDetails /></main> */}
      
    </React.Fragment>
  );
}

export default App;
