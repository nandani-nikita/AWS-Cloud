import "./App.css";
// importing components from react-router-dom package
import {
BrowserRouter as Router,
Routes,
Route,
Navigate,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import About from "./components/About";
// import ContactUs component
import ContactUs from "./components/ContactUs";

function App() {
return (
	<div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
);
}

export default App;
