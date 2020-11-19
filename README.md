# IssueTracker-28

<p align="center"><img width="600" alt="logoImage4" src="https://user-images.githubusercontent.com/60839959/98240950-8ff60380-1fad-11eb-998e-06fd4365c35b.png"></p>

<p align="center">
  <img src="https://img.shields.io/badge/react-17.0.1-9cf?logo=react" />
  <img src="https://img.shields.io/badge/node.js-v12.19.0-green?logo=node.js" />
  <img src="https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/mysql-v5.7.32-blue?logo=mysql" />
</p>

### 🍎 [28조의 큐티뽀짝한 Service URL](http://www.issue-tracker28.kro.kr)
### 📷 [프로젝트 실행 화면](https://github.com/boostcamp-2020/IssueTracker-28/wiki/%EC%8B%A4%ED%96%89-%ED%99%94%EB%A9%B4)
### 📹 [API 명세서](https://documenter.getpostman.com/view/8483132/TVenfU7k)
### ✍ [저희 팀이 더 궁금하시다면 Wiki 보러가기](https://github.com/boostcamp-2020/IssueTracker-28/wiki)

## 📹 Demo Video
[<img width="400" src="https://user-images.githubusercontent.com/60457112/99021811-d696bf80-25a4-11eb-9257-9dc758de39c1.png"/>](https://youtu.be/-zdDoQeR3D4)
> 클릭하시면 youtube로 이동합니다💨

## 🛠 Tech Stack
<p align="center"><img width="800" alt="기술 스택" src="https://user-images.githubusercontent.com/60457112/99019839-9c2b2380-25a0-11eb-9ece-338bfc291d36.png"></p>


## 📊 DB Model

<img width="800" alt="스크린샷 2020-10-27 오후 1 11 59" src="https://user-images.githubusercontent.com/39231606/99022631-70ab3780-25a6-11eb-9fd3-d02e9c2eb34c.png">

## 🗂 Directory

<details>
<summary>server</summary>
  <div markdown="1">
    
```
🗃 Project Folder  
📁server  
├── app  
├── 📁bin  
│   └── www  
├── 📁config  
├── 📁middlewares  
├── 📁models  
├── 📁passport  
├── 📁routes
│   ├── 📁auth
│   ├── 📁comment
│   ├── 📁issue 
│   ├── 📁label 
│   ├── 📁milestone
│   ├── 📁upload 
│   └── 📁user
└── 📁services
    └── 📁db 
```

  </div>
</details>

<details>
<summary>client</summary>
  <div markdown="1">
    
  ```
  📁client  
  ├── 📁public
  │   └── 📁images
  │   └── index.html
  └── 📁src
      ├── App
      ├── 📁api
      ├── 📁components  
      ├── 📁constants
      ├── 📁contexts
      ├── 📁pages
      └── 📁utils
  ```
  
  </div>
</details>

## 🏃‍♂️ Install & Run

<details>
<summary>install & run</summary>
  <div markdown="1">
    
### install
```
git clone -b master --single-branch https://github.com/boostcamp-2020/IssueTracker-28.git
```

### backend .env 파일 생성
```
NODE_ENV=development
USER_NAME=db_username
PASSWORD=db_password
DATABASE=database_name
HOST=server_url

GITHUB_CLIENT_ID=github_client_id
GITHUB_CLIENT_SECRET=github_client_secret_key

JWT_SECRET=jwt_secret_key
ACCESS_KEY=ncloud_access_key
SECRET_KEY=ncloud_secret_key
```

### frontend 실행
```
cd client
npm i
npm run dev
```
   
### backend 실행
```
cd server
npm i
npm run dev
```

### http://127.0.0.1:8080/ 으로 접속!

  </div>
</details>
    
## 👩‍👩‍👧‍👦Members

|  [J032\_김동현](https://github.com/dooking)  |  [J046\_김예진](https://github.com/johnyejin)  |  [J139\_이상경](https://github.com/sang-gyeong)  |  [J216\_한예지](https://github.com/yeji9175)  |
| :----------: |  :--------:  |  :---------: |  :---------: |
| <img src="https://avatars2.githubusercontent.com/u/60457112?s=400&u=abe6c14e6a1ed9c7822c607260d04eced3656a17&v=4" width=400px alt="_"/> | <img src="https://avatars3.githubusercontent.com/u/26537048?s=400&u=c6107e0b653eee1fc662dc8e1ec87f1f12c5489f&v=4" width=400px alt="_"/> | <img src="https://avatars3.githubusercontent.com/u/60839959?v=4" width=400px alt="_"/> | <img src="https://avatars2.githubusercontent.com/u/39231606?s=400&u=cf3abd7e53b9ce634fffe6dc8d13ff10935ae183&v=4" width=400px alt="_"> |
|스타 홍보 담당⭐| 놀리기 담당😛 | 박수치기 담당 👏👏 |웃음 담당🤣|

## Show your support

Give a 🌟 if this project helped you
