import "./App.css";
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateTable from "./components/CreateTable";
import AllData from "./components/ReadTableData";
import InsertData from "./components/InsertData";
import UpdateData from "./components/UpdateTableData";
import DeleteTableData from "./components/DeleteTableData";
import DropTable from "./components/DropTable";

function App() {
return (
	<div className="App">
    
    
      <Router>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateTable />} />
            <Route path="/read" element={<AllData />} />
            <Route path="/insert" element={<InsertData />} />
            <Route path="/update" element={<UpdateData />} />
            <Route path="/delete" element={<DeleteTableData />} />
            <Route path="/drop" element={<DropTable />} />
        </Routes>
      </Router>
    </div>
);
}

export default App;
