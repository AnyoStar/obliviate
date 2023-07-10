import { Container, Form, InputGroup, Nav } from "react-bootstrap";

import { useState } from "react";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import PostCard from "./PostCard";


function Post() {
  const [search, setSearch] = useState("asdf");
   
  return (
    <Container style={{margin: '0px', padding: '0px'}}>
    <div className="upbar" style={{backgroundColor: '#765d81', width: 1500}}>

        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          style={{ height: 134 }}
        >
          <Nav.Item className="justify-content-center align-self-center">
            <img className="homeiconImage" alt="homeicon.png" src="homeicon.png" style={{width: '180px', marginLeft: '25px'}}/>
          </Nav.Item>
          <Nav.Item className="justify-content-center align-self-center ms-5 fs-2">
            현재 시간
          </Nav.Item>
          <Nav.Item className="justify-content-center align-self-center ms-5 fs-2">
            <Nav.Link eventKey="link-1">잊혀진 글</Nav.Link>
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
        <Sidebar style={{display:'inline-block', position: 'fixed', zIndex: '1'}}>
            <Menu
                menuItemStyles={{
                button: {
                    // the active class will be added automatically by react router
                    // so we can use it to style the active menu item
                    [`&.active`]: {
                    backgroundColor: '#13395e',
                    color: '#b6c8d9',
                    },
                },
                }}
            >
                <MenuItem component={<Link to="/ddsdsd" />}> 최근 게시물</MenuItem>
                <MenuItem component={<Link to="/a" />}> 베스트 게시물</MenuItem>
                <MenuItem component={<Link to="/calendar" />}> 글 작성</MenuItem>
                <MenuItem component={<Link to="/e" />}> 즐겨찾기</MenuItem>
                <MenuItem component={<Link to="/login" />}> 로그아웃</MenuItem>
            </Menu>
        </Sidebar>
        <PostCard/>
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

export default Post;
