import React, { useEffect, useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import serverIp from "../value/strings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/Auth.module.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [nickname, setNickname] = useState("");
  const [isValidNickname, setIsValidNickname] = useState(false);

  const navigate = useNavigate();

  const handleCheckEmail = () => {
    // 서버와 통신후
    fetch(`http://${serverIp}:4000/duplicate/email?email=${email}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data) {
          toast("이미 사용중인 이메일입니다.");
          setIsValidEmail(false);
        } else {
          toast("사용 가능한 이메일입니다.");
          setIsValidEmail(true);
        }
      });
  };

  const handleCheckUsername = () => {
    // 서버와 통신후
    fetch(`http://${serverIp}:4000/duplicate/username?username=${nickname}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data) {
          toast("이미 사용중인 닉네임입니다.");
          setIsValidNickname(false);
        } else {
          toast("사용 가능한 닉네임입니다.");
          setIsValidNickname(true);
        }
      });
  };

  useEffect(() => {
    if (password && passwordCheck) {
      if (password === passwordCheck) {
        setIsValidPassword(true);
      } else {
        setIsValidPassword(false);
      }
    }
  }, [password, passwordCheck]);

  const handleSubmit = (e) => {
    e.preventDefault(); // submit이 될 때 페이지 이동이 되는것을 막아줍니다.

    const registerInfo = {
      email: email,
      password: password,
      nickname: nickname,
    };

    // 이제 registerInfo를 서버로 보낼꺼임!

    fetch(`http://${serverIp}:4000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          toast("회원가입에 실패했습니다. " + json.error);
          return;
        }
        toast("로그인 성공, 잠시후 로그인페이지로 이동합니다.");
        // 자바스크립트에서 일정 시간 뒤에 로직을 넣으려면
        setTimeout(() => {
          // 로그인페이지로 이동
          navigate("/login");
        }, 1500);
      });
  };

  // document.body.style.backgroundColor="#5F2B77"

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={4} sm={5} md={6}>
          <Card>
            <ToastContainer />
            {/* 아래꺼 재미로 한거임 ! */}
            <Container className={style.authTitle}>
              <Card.Text className="display-5">가입하기</Card.Text>
              <Card.Text>Obliviate에 오신것을 환영합니다.</Card.Text>
            </Container>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={9}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="이메일을 입력해주세요."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={3}>
                    <Button onClick={handleCheckEmail}>중복확인</Button>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="패스워드를 입력해주세요."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="동일한 패스워드를 입력해주세요."
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Row>
                    <Col xs={9}>
                      <Form.Control
                        type="text"
                        placeholder="닉네임"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                      />
                    </Col>
                    <Col xs={3}>
                      <Button onClick={handleCheckUsername}>중복확인</Button>
                    </Col>
                  </Row>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={
                    !isValidEmail || !isValidPassword || !isValidNickname
                  }
                >
                  가입하기
                </Button>
                <span className="m-2">또는</span>
                <a href="/login" style={{ textDecoration: "none" }}>
                  로그인하기
                </a>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
