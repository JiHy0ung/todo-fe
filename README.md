## **📍 TODO LIST**
**MERN**스택으로 개발한 [TODO LIST](https://wondrous-belekoy-f115b9.netlify.app/)    사이트

## **📝  프로젝트 소개**
간단하고 직관적인 **할 일 관리 웹** 애플리케이션입니다.

**MERN**(MongoDB, Express, React, Node.js) 스택을 활용하여 CRUD기능을 구현하고,

**사용자 개인별 할 일**을 확인 가능합니다.

**다크/라이트 모드**와 반응형 디자인을 지원합니다.

## **🕰️  개발기간**
2025.07.24 ~ 2025.07.29

## **⚒️ 사용 기술 스택**
### FrontEnd
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/reactbootstrap-41E0FD?style=for-the-badge&logo=reactbootstrap&logoColor=white">  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/zustand-413c36?style=for-the-badge&logo=zustand&logoColor=white">

### BackEnd
<img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"> <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=Mongoose&logoColor=white">



### Deployment
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white">

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> 


## **⚙️ 개발환경**
* Node.js 24.4.1
* npm 11.4.2
* Visual Studio Code
* Git / GitHub
* MongoDB Atlas
* AWS Elastic Beanstalk

## **📔 시작 가이드**
### **설치**
```
https://github.com/JiHy0ung/todo-fe.git
https://github.com/JiHy0ung/nodejs-todo-be.git
```

### **FrontEnd**
```
npm install
npm start
```

### **.env(FrontEnd)**
```
REACT_APP_BACKEND_URL = http://localhost:port_number
REACT_APP_BACKEND_PROXY = https://wondrous-belekoy-f115b9.netlify.app // or your website
```

### **BackEnd**
```
npm install
nodemon app.js // npx nodemon app.js
```

### **.env(BackEnd)**
```
MONGODB_URI_PROD = your_mongodb_connection_string
```


## **✏️ 주요 기능**

- [x] 로그인/회원가입 기능

- [x] 할 일 추가 / 삭제

- [x] 할 일 완료 상태 토글

- [x] 반응형 UI

- [x] 다크/라이트 모드 

ㅤ

**Light Mode**

<img width="345" height="131" alt="image" src="https://github.com/user-attachments/assets/fc998c25-eaf2-4256-8487-dde39135d52f" /> ㅤ <img width="94" height="131" alt="image" src="https://github.com/user-attachments/assets/83130c93-74a9-4df7-8155-8a1b238ff9ed" />




**Dark Mode**

<img width="345" height="126" alt="image" src="https://github.com/user-attachments/assets/1f59d773-2aec-444e-8813-d3ccdd848cac" /> ㅤ <img width="96" height="126" alt="image" src="https://github.com/user-attachments/assets/927f757f-f790-4fea-b0c2-ee824050758c" />


## **🧾 API 명세**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/tasks` | 모든 할 일 조회 |
| POST   | `/tasks` | 새 할 일 추가 |
| PUT    | `/tasks/:id` | 할 일 완료 상태 업데이트 |
| DELETE | `/tasks/:id` | 할 일 삭제 |
| POST   | `/user/register` | 회원가입 |
| POST   | `/user/login` | 로그인 |
| GET   | `/user/me` | 로그인된 유저 정보 가져오기 |


## **📂 폴더 구조**
#### FrontEnd
```
TODO-FE
│ 
├─ 📁 node_modules
📁 public
│  ├─ index.html
│  └─ _redirects
├─ 📁 src
│  ├─ 📁 components
│  │  ├─ TodoBoard.js
│  │  └─ TodoItem.js
│  ├─ 📁 utils
│  │  └─ api.js
│  ├─ App.js
│  ├─ App.css
│  ├─ index.js
│  └─ index.css
├─ .env
├─ .gitignore
├─ package-lock.json
├─ package.json
└─ README.md
```

#### BackEnd
```
TODO-BE
│ 
├─ 📂 node_modules
├─ 📂 .ebextensions
│  └─ cors.config
├─ 📂 controller
│  └─ task.controller.js
├─ 📂 model
│  └─ Task.js
├─ 📂 routes
│  ├─ index.js
│  └─ task.api.js
├─ app.js
├─ .env
├─ Procfile
├─ package-lock.json
└─ package.json
```
