import "bootstrap/dist/css/bootstrap.min.css";
import serverIp from "../value/strings";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // document.body.style.backgroundColor = "#5F2B77";

  const handleSubmit = () => {
    const loginInfo = {
      email: email,
      password: password,
    };

    fetch(`http://${serverIp}:4000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          if (json.error === "LOGIN_FAIL") {
            toast("잘못된 이메일 또는 패스워드입니다.");
            return;
          }
          toast("서버와의 통신이 불안정합니다.");
          return;
        }
        console.log("성공");
        toast("로그인 성공");
        localStorage.setItem("token", json.data);
        //포스트로 이동
      });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={4} sm={5} md={6}>
          <Card>
            <ToastContainer />
            <Container>
              <Card.Text className="display-5">로그인</Card.Text>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일을 입력해주세요."
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="패스워드를 입력해주세요."
                    />
                  </Form.Group>

                  <Button variant="primary" onClick={handleSubmit}>
                    입장하기
                  </Button>
                  <span className="m-2">또는</span>
                  <a href="/register" style={{ textDecoration: "none" }}>
                    가입하기
                  </a>
                </Form>
              </Card.Body>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
