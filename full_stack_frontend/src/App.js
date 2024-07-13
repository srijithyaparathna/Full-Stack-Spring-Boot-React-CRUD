import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import AddUser from './users/AddUser';
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Ensure this is the correct path

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
