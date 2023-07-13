import { Container, Form, InputGroup, Nav, Row, Col } from "react-bootstrap";
import serverIp from "../value/strings";

import { useState, useEffect } from "react";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

function DeadPost() {
  const [search, setSearch] = useState("asdf");
  const [posts, setPosts] = useState([]);
  const [isPostEmpty, setIsPostEmpty] = useState(false);
  const navigate = useNavigate();

  const fetchDeadPosts = () => {
    //최근 순 글
    fetch(`http://${serverIp}:4000/fetchExpire`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data === null) {
          setIsPostEmpty(true);
          return;
        }
        setIsPostEmpty(false);
        setPosts(json.data);
      });
  };

  const gotoLive = () => {
    navigate('/post');
  }

  useEffect(() => {
    //글 불러오기
    fetchDeadPosts();
  }, []);

  return (
    <Container style={{ margin: "0px", padding: "0px" }}>
      <div
        className="upbar"
        style={{ backgroundColor: "#765d81", width: 1500 }}
      >
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          style={{ height: 134 }}
        >
          <Nav.Item className="justify-content-center align-self-center">
            <img
              className="homeiconImage"
              alt="homeicon.png"
              src="homeicon.png"
              style={{ width: "180px", marginLeft: "25px" }}
            />
          </Nav.Item>
          <Nav.Item className="justify-content-center align-self-center ms-5 fs-2">
            현재 시간
          </Nav.Item>
          <Nav.Item className="justify-content-center align-self-center ms-5 fs-2">
            <Nav.Link onClick={gotoLive}>아직 기억되는 글</Nav.Link>
          </Nav.Item>
          <Nav.Item className="justify-content-center align-self-center ms-5 fs-2">
            <Nav.Link eventKey="link-2">내 정보</Nav.Link>
          </Nav.Item>
          <Nav.Item className="justify-content-center align-self-center ms-5 fs-2">
            <Nav.Link>
              <InputGroup>
                <Form.Control
                  className="h-"
                  placeholder="검색어 입력"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  type="text"
                  id="example-search-input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {/*글 조회*/}
      {isPostEmpty ? (
        <span>기억에 남은 포스트가 없습니다.</span>
      ) : (
        <Row className="justify-content-center mt-4">
          <Col xs={4} sm={5} md={6}>
            {
              // posts 안에는 post가 여러개
              posts.map((post) => {
                return (
                  <div key={post.posts_id} className="mb-4">
                    <PostCard
                      title={post.title}
                      content={post.content}
                    />
                  </div>
                );
              })
            }
          </Col>
        </Row>
      )}
      {/* <aside className="aside">
        <div className="homebutton"></div>
        <div className="option-title">보기 옵션</div>
        <ul>
          <li className="on">최근 게시물</li>
          <li>베스트 게시물</li>
        </ul>
        <div className="option-title">글 옵션</div>
        <ul>
          <li>글 작성</li>
          <li>즐겨 찾기</li>
        </ul>
        <div className="option-logout">로그아웃</div>
            </aside> */}

      {/* <header className="header">
          <div className="left"></div>
          <div className="times">현재 시간</div>
          <nav>
            <ul>
              <li>잊혀진 글</li>
              <li>내 정보</li>
              <li>
                <div className="search">
                  <input
                    className="searchBar"
                    type="text"
                    placeholder="검색어 입력"
                  />
                  <img
                    className="searchIcon"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                    alt="검색 아이콘"
                  />
                </div>
              </li>
            </ul>
          </nav>
          <div className="right"></div>
        </header> */}
    </Container>
  );
}

export default DeadPost;
