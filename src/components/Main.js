import React, { useState } from 'react';
import Iframe from 'react-iframe';

export default function Main() {

  const [PageState, setPageState] = useState({ url: 'http://www.youtube.com/embed/xDMP3i36naA' });
  const Projects = {
    TIL: {
      exercise: {
        title: "vanillaJs 연습",
        url: "https://sungwoo1548.github.io/TIL/VanillaJS/index.html",
      },
      giphy: {
        title: "giphy API 연습",
        url: "https://sungwoo1548.github.io/TIL/VanillaJS/Giphy/index.html",
      },
      soundcloud: {
        title: "soundcloud API 연습",
        url: "https://sungwoo1548.github.io/TIL/SoundCloud/index.html",
      },
    }
  }

  const Navigation = () => (
    <nav className="navigation">
      <img className="avatar" src="assets/images/user.png" alt="avatar" />
      <text className="nav-item" onClick={() => { setPageState(Projects.TIL.exercise) }} >Intro</text>
      <text className="nav-item" onClick={() => { setPageState(Projects.TIL.giphy) }} >TIL</text>
      <text className="nav-item" onClick={() => { setPageState(Projects.TIL.soundcloud) }} >SoundCloud</text>
    </nav>
  );


  return (
    <div>
      <Navigation />
      <div className="main">
        <div className="column-start">
          <div className="Header">tt</div>
          <Iframe url={PageState.url}
            className="iframe-style"
            id="myId"
          />
        </div>
      </div>
    </div>
  );
}
