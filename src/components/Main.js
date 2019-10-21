import React from 'react';

class NavLink extends React.Component {
    render() {
      return (
        <a className="nav-item" href={`#${this.props.itemName}`}>
          {this.props.itemName}
        </a>
      );
    }
  }
  const Navigation = () => (
    <nav className="navigation">
      <img className="avatar" src="assets/images/user.png" alt="avatar" />
      <NavLink itemName="Intro" />
      <NavLink itemName="프로젝트1" />
      <NavLink itemName="프로젝트2" />
    </nav>
  );
  const Intro = () => (
    <div className="section" id="Intro">
      <h1>김성우의 포트폴리오</h1>
      <div>
        <a href="mailto:swo1548@gmail.com">swo1548@gmail.com</a>
        <p>서울 강남구 논현동</p>
      </div>
      <div>
        <h2>경력</h2>
        <p>ddddddd</p>
        <h2>자기소개</h2>
        <p>hi my name is ksw</p>
      </div>
    </div>
  );

  const Project = ({ name, time, summary, epilogue, resultsURL }) => (
    <div className="section" id={name}>
      <h1>{name}</h1>
      <p>{time}</p>
      <div>
        <h2>개요</h2>
        <p>{summary}</p>
        <h2>후기</h2>
        <p>{epilogue}</p>
        <h2>결과</h2>
        <div>
          {resultsURL.map(url => (
            <img src={url} alt="project result" />
          ))}
        </div>
      </div>
    </div>
  );
  const projects = [
    {
      name: "프로젝트1",
      time: "2019.04~2019.05",
      summary: "이 프로젝트는 영국에서부터 시작되어 .......",
      epilogue: "이 프로젝트를 시작한 사람을 가만두지 않겠다.",
      resultsURL: [
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200"
      ]
    },
    {
      name: "프로젝트2",
      time: "2019.04~2019.05",
      summary: "이 프로젝트는 영국에서부터 시작되어 .......",
      epilogue: "이 프로젝트를 시작한 사람을 가만두지 않겠다.",
      resultsURL: [
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200",
        "http://placehold.it/200x200"
      ]
    }
  ];

  // const Project = () => <h1>프로젝트</h1>;
  const Main = () => (
    <div>
      <Navigation />
      <div className="main">
        <div className="column-start">
          <Intro />
          <Project {...projects[0]} />
          <Project {...projects[1]} />
        </div>
      </div>
    </div>
  );

  export default Main;