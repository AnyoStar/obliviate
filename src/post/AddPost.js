import { useState } from "react";
import { Form, Button, Nav, Container, ToastContainer } from "react-bootstrap";
import { getCurrrentUser } from "../auth/tokenService";
import { toast } from "react-toastify";
import serverIp from "../value/strings";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const id = getCurrrentUser().id;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postInfo = {
      title: title,
      content: content,
      user_id: id,
    };

    fetch(`http://${serverIp}:4000/addPost`, {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(postInfo),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          if (json.error === "INVALID PARAMETER") {
            toast("INVALID PARAMETER. 빈 값이 있습니다.");
            return;
          }
          toast("서버와의 통신이 불안정합니다.");
          return;
        }
        toast("글이 작성되었습니다.");
        setTimeout(() => {
          navigate("/post");
        }, 2000);
      });
  };

  return (
    <Container>
      <div>
        <ToastContainer />
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          style={{ height: 134, marginLeft: "650px" }}
        >
          <Nav.Item className="justify-content-center align-self-center">
            <Button variant="danger">초기화</Button>{" "}
            <Button variant="primary" onClick={handleSubmit}>
              글 작성
            </Button>{" "}
          </Nav.Item>
          /
        </Nav>
      </div>
      <div style={{ marginTop: "20px", width: "600px", marginLeft: "450px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="글 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="글 내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default AddPost;
