import React, { useState } from 'react';
import Iframe from 'react-iframe';




export default function Main() {

  const [PageState, setPageState] = useState();
  const [ProjectState, setProjectState] = useState({ url: '' });

  const Pages = {
    TIL: [
      {
        subject: "exercise",
        title: "vanillaJs 연습",
        gitAdress: "https://github.com/sungwoo1548/TIL/tree/master/VanillaJS",
        date: "2019/10/21",
        comments: "이 프로젝트는 prompt로 사용자 이름을 입력받아 나타내고,"
          + " 순수 javascript로 구현된 counter 기능이 있음.",
        url: "https://sungwoo1548.github.io/TIL/VanillaJS/index.html",
      },
      {
        subject: "giphy",
        title: "giphy API 연습",
        gitAdress: "https://github.com/sungwoo1548/TIL/tree/master/VanillaJS/Giphy",
        date: "2019/10/21",
        comments: "이 프로젝트는 Giphy라는 움직이는 그림 gif 검색사이트의 API를 이용함.\n"
          + "1. 검색 입력창 윗 부분에는 3초에 한번씩 랜덤한 그림이 표시됨"
          + "2. 입력창에 입력 후 검색 버튼 클릭 또는 엔터를 누르면 키워드에 맞는 결과가 조회됨.",
        url: "https://sungwoo1548.github.io/TIL/VanillaJS/Giphy/index.html",
      },
      {
        subject: "soundcloud",
        title: "soundcloud API 연습",
        gitAdress: "https://github.com/sungwoo1548/TIL/tree/master/SoundCloud",
        date: "2019/10/21",
        comments: "이 프로젝트는 SoundCloud라는 재생가능한 음원 검색 사이트의 API를 이용함."
          + "1. 검색 임력창에 키워드 입력 후 엔터 또는 검색버튼 클릭"
          + "2. 검색 결과에서 맘에 드는 곡 카드에서 +Add to playlist 를 클릭"
          + "3. 좌측에 음원 재생 카드가 생기고, 계속 추가됨"
          + "4. 좌측에 추가된 재생리스트는 local storage에 쌓이며, reset버튼 누르기 전까지 브라우저에 저장되어있음.",
        url: "https://sungwoo1548.github.io/TIL/SoundCloud/index.html",
      }
    ],
  }

  const Navigation = () => (
    <nav className="navigation">
      <span>KickTheBook</span>
      <img className="avatar" src="assets/images/user.png" alt="avatar" />
      <span className="nav-item" href="#" onClick={() => { setPageState(Pages.TIL.exercise) }} >Intro</span>
      <span className="nav-item" href="#" onClick={() => { setPageState(Pages.TIL) }} >Today I Learn</span>
      {/* <span className="nav-item" href="#" onClick={() => { setPageState(Pages.TIL.soundcloud) }} >SoundCloud</span> */}
    </nav>
  );
  const Header = ({ PageState }) => {
    // console.log(PageState);
    if (PageState) {
      // setProjectState(PageState[0]); // Page의 첫번 째 내용 set
      return PageState.map((el) => { return <a className="top-nav-item" onClick={() => { setProjectState(el) }}>{el.subject}</a> });
    }
    else return <a className="top-nav-item">Portfolio Site 입니다.<br /> 좌측의 메뉴를 클릭해 주세요.</a>;
  }

  const PjContents = ({ ProjectState }) => {
    return (
      <div>
        <p>제목 : {ProjectState.title} </p>
        <p>날짜 : {ProjectState.date}</p>
        <p>설명 : {ProjectState.comments}</p>
        <a href={ProjectState.gitAdress}>github 보러가기 →</a>
      </div>
    );
  };

  return (
    <div>
      <Navigation />
      <div className="main">
        <div className="contents">
          <div className="top-navigation">
            <Header PageState={PageState} />
          </div>
          <div className="project-contents">
            <PjContents ProjectState={ProjectState} />
          </div>

          <Iframe url={ProjectState.url}
            className="iframe-style"
          />
        </div>
      </div>
    </div>
  );
}


{/* <div className="dropdown">
  <button className="dropbtn">DropDown</button>
  <div className="dropdown-content">
  </div>
</div> */}