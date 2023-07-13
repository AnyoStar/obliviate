import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./login/Login";
import Register from "./register/Register";
import Post from "./post/Post";
import "./App.css";
import AddPost from "./post/AddPost";
import DeadPost from "./post/DeadPost";

function App() {
  return (
    <Container style={{ margin: "0px", padding: "0px" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/deadPost" element={<DeadPost />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
