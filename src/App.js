import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./login/Login";
import Register from "./register/Register";
import "./App.css";



function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
