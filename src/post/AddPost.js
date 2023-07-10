import { useState } from "react";
import { Form, Button, Nav, Container } from "react-bootstrap";
import { getCurrrentUser } from "../auth/tokenService";

function AddPost() {
    const id = getCurrrentUser().id;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //todo: 포스트 추가를 해야한다! id랑 제목, 내용은 만들어 둠. 전달만 하면 돼!

  return (
    <Container>
      <div>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          style={{ height: 134, marginLeft: "650px" }}
        >
          <Nav.Item className="justify-content-center align-self-center">
            <Button variant="danger">초기화</Button>{" "}
            <Button variant="primary">글 작성</Button>{" "}
          </Nav.Item>
          /
        </Nav>
      </div>
      <div style={{ marginTop: "20px", width: "600px", marginLeft: "450px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="글 제목" value={title} onChange={(e) => (setTitle(e.target.value))}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="글 내용" value={content} onChange={(e) => (setContent(e.target.value))}/>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}

export default AddPost;
