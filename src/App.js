import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import CrnTheme from "./utils/Crn-Theme";

import Home from "./pages/Home";
import OpenPost from "./pages/OpenPost";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <CrnTheme>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/post" element={<OpenPost />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CrnTheme>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.func
};

export default App;
