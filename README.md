# Publishing git pages (react)



## git pages 배포 준비



### 준비할 것

1. github 계정
2. gitbash 설치 (cmd 이용해도 됨.)
3. node.js 설치 (노드 설치시 npm도 설치됨.)
4. 코드 에디터



## git pages 배포 하기

### 1. github

repository 생성 후 clone 주소 복사

### 2. PC (콘솔창)

원하는 위치에서 아래 명령어 수행

2.1 폴더 생성

​	mkdir [folder name]

​	cd [folder name]



2.2 git 초기화 후 repository 연결

​	git init

​	git remote add [1번에서 복사한 주소]



2.3 git repository 연결 확인

​	git remote -v

-> 결과로 복사한 주소가 나와야함.



### 3. 리액트 앱 생성 하기 (콘솔)

3.1 리액트 cli 설치

​	npm install -g create-react-app

-> 1회성으로 이용하려면 생성한 폴더 안에서 npm install create-react-app



3.2 리액트 프로젝트 생성

​	create-react-app [project name]

-> 결과로 project name을 가진 폴더가 생성되고, 폴더안에 다양한 파일이 생김.
이미 만들어 놓은 폴더에 바로 프로젝트를 생성하려면 폴더가 비어있어야 함. 
때문에 create-react-app [project name] 명령어 입력 후 생성된 폴더에 들어가서 git init 하면 편리함.



### 4. 리액트 프로젝트 확인 후 배포

4.1 로컬에서 실행해보기

​	cd [project name]

​	npm start

-> localhost:3000 으로 브라우저가 뜨고, 리액트 로고가 나옴.



4.2 git push

​	git add .

​	git commit -m "initial commit"

​	git push -u origin master



### 5. git pages 빌드 후 배포

5.1 빌드도구 설치

​	project folder안에서

​	npm install --save gh-pages



5.2 pakage.json 수정

```js
  "homepage": "https://[github ID].github.io/[repository name]", // 추가 1
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "gh-pages": "^2.1.1",
    "react": "^16.10.2",
    "react-dom": "^16.10.2",
    "react-scripts": "3.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy":"npm run build",  // 추가 2
    "deploy":"gh-pages -d build" // 추가 3
  },
```

-> 추가 1,2,3 입력  후 저장



5.3 git page 배포

​	npm deploy

-> deploy 하면 git hub에 gh-pages라는 branch 생성되고, 빌드된 리액트 프로젝트가 push됨.



### 6. git pages 설정하기

6.1 github에 만든 repository 로 접속

![image](https://user-images.githubusercontent.com/21153016/67208828-36c63b00-f451-11e9-9abd-4c02a05a5aac.png)

-> 형광색으로 표시된 Settings 클릭



6.2  Settings 에서 아래로 내리면 GitHub Pages 항목이 있음

![image](https://user-images.githubusercontent.com/21153016/67208965-768d2280-f451-11e9-9d36-2a9f4cc8e705.png)

-> 형광색으로 표시된 gh-pages branch 선택하면 화면이 리프레쉬 됨,
다시 GitHub Pages 항목으로 내려오면 

![image](https://user-images.githubusercontent.com/21153016/67209142-c9ff7080-f451-11e9-955a-cdb905fc4b99.png)

-> 빨간색으로 배포된 주소가 나옴 
주소 클릭하면 localhost:3000에서 보던 화면이 보임 (업로드 후 적용까지 시간이 조금 걸림 5분이내...)



------- 끝! // 이제 local에서 프로젝트 추가 개발 확인 후, 만족스러우면 deploy를 통해 git page를 업데이트 함.



## git pages 관리하기

--추후 업데이트 예정