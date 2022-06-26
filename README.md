![developicmockup](https://user-images.githubusercontent.com/63634174/175551942-6966f6ca-e616-4960-baa5-c8e6b700459a.png)

Developic은 사진작가들을 위한 블로그 플랫폼입니다.

사진과 이야기를 기록, 공유할 수 있는 공간을 제공하고, 같은 분야의 경험·지식을 나눔으로써 작가들의 커뮤니티 구축을 돕는 서비스를 목표로 진행한 프로젝트입니다.

· 인원: Front + Back - 1인 / Front - 2인 / 총 3인

## 관련 링크


[클라이언트 Github](https://github.com/suin-d/developic2-client)

[백엔드 Github](https://github.com/Conradmaker/developic-ver2-server)

[API 문서](https://documenter.getpostman.com/view/13075087/TzXtKLoR)

[요구사항 및 기능정의서](https://docs.google.com/spreadsheets/d/1fJtmMXNe7Wvnn5pIAkkWHwRjtKyJT6vT2myZKwF5nEY/edit#gid=357767264)


## 사용 기술
### **클라이언트**

- TypeScript
- React
- Next.js
- Redux (redux-toolkit)
- emotion.js
- toast-ui
- 배포도구 - netlify + route53

### **백앤드**

- TypeScript
- Node.js
- Express
- passport.js
- Sequelize
- MySQL
- AWS - EC2, RDS, S3, Lambda, route53


## 협업 도구

- Notion
- Trello
- Git
- Github
- Sourcetree


## 프로젝트 소개

![Slide 16_9 - 2](https://user-images.githubusercontent.com/63634174/175552457-f4bb6811-d55d-4b85-bc66-8dddc2037525.png)
![Group 7](https://user-images.githubusercontent.com/63634174/175552572-1438703d-e71d-497c-8d2f-915f6bfee893.png)
![Slide 16_9 - 5](https://user-images.githubusercontent.com/63634174/175552630-adf0797f-3d7e-4980-bcc6-0dd2dbb06e7e.png)
![Slide 16_9 - 6](https://user-images.githubusercontent.com/63634174/175552636-8504fc90-6dea-4509-b3ba-25709f62668b.png)
![Untitled](https://user-images.githubusercontent.com/63634174/175552645-61da5ed0-4597-4a4a-a77f-ccf67dd08f04.png)
![Slide 16_9 - 8](https://user-images.githubusercontent.com/63634174/175552665-74943c08-3e50-4833-9082-90f42cf21f53.png)
![Slide 16_9 - 9](https://user-images.githubusercontent.com/63634174/175552670-f1a12c26-d391-4c07-8f67-1bc5c917997c.png)
![Slide 16_9 - 10](https://user-images.githubusercontent.com/63634174/175552678-b7b4222a-1d86-40af-a048-62d169ea125b.png)


## 담당 구현 사항

### 내 디벨로픽(블로그) 페이지

- 블로그 글/픽스토리/소개 페이지 레이아웃 구현
    
 ![blogpostlist-min](https://user-images.githubusercontent.com/63634174/175553764-133c5684-1c59-4e97-a125-0d8ac17c27b8.gif)

- 글 탭
    - 유저 리서치를 통해 피드가 정사각형이 아닌 자유로운 형태였으면 좋겠다는 의견을 얻어 다양한 이미지 레이아웃 고민
        
        → 썸네일 이미지의 가로세로비율을 왜곡하지 않고 최대한 본래의 특성을 유지하면서, 글의 정보 또한 잘 전달될 수 있도록 적당한 여백과 일관성 있는 너비를 가진 핀터레스트 형식 레이아웃으로 Masonry 라이브러리를 활용해 구현
        
    - 유저의 로그인 상태를 확인하고, 비공개 설정한 글의 경우 해당 블로그 유저에게만 보일 수 있도록 처리
    - 무한스크롤 방식으로 추가 글 목록 렌더링
    
![blogpicstoryintro-min](https://user-images.githubusercontent.com/63634174/175553702-5d35e2c3-66f9-4937-ba0f-bf2b24ef1f50.gif)

- 픽스토리 탭
    - 관련 있는 글을 앨범(시리즈) 형식으로 엮은 픽스토리 레이아웃 구현
    - 픽스토리 썸네일 / 제목, 설명 / 포함된 글 수, 총 좋아요, 조회 수 정보 / 등록된 글 썸네일(최대 6개)까지 조회 가능
- 소개 탭
    - 유저가 작성한 소개 내용(자기소개, 주 사용 기기, 웹사이트) 조회
    - 소개글이 없는 경우, '소개 작성' 버튼을 눌러 설정 페이지의 소개 탭으로 이동
- 사용자 프로필
    - 프로필 이미지, 구독자/관심작가 수, 한 줄 소개 데이터 렌더링
    - 로그인한 상태일 때 다른 사용자 블로그 접근 시 구독 버튼 출력, 본인 블로그 접근 시 프로필 수정 버튼 출력

- 블로그 구독 관련 기능
   
|구독/구독해지 기능|구독자/관심작가 유저 리스트 모달|
|---|----|
|![follow-min](https://user-images.githubusercontent.com/63634174/175553699-d50613b9-cdb3-4c8a-ae82-50235544831a.gif)|![followmodal-min](https://user-images.githubusercontent.com/63634174/175553697-74cb33f5-848e-4452-b8a0-ea531c3beced.gif)|

- 구독/구독해지 기능 구현
  - 구독 버튼을 눌러 구독 시 버튼 텍스트가 구독해지로 변경, 구독자 수가 실시간으로 증가하도록 구현
  - 구독해지 버튼을 눌러 구독 취소 시 버튼 텍스트가 구독으로 변경, 구독자 수가 실시간으로 감소하도록 구현

- 구독자/관심작가 유저 리스트 모달
  - 구독자와 관심작가 수를 각각 클릭하면 모달창을 띄우고, 해당 사용자 목록 렌더링
  - 사용자 프로필 사진, 이름, 한 줄 소개와 함께 구독해지/구독하기 버튼 출력

- Next.js Image 컴포넌트로 이미지 최적화
  
  ![lazyloading-min (1)](https://user-images.githubusercontent.com/63634174/175553678-f395f4b2-ddb1-44a9-bbf2-59fdb1868a68.gif)
   
    - 지연 로드(lazy-loading)가 적용되어 이미지가 뷰포트로 스크롤 될 때 로드
    - 브라우저가 지원하는 경우 WebP과 같은 형식으로 이미지의 크기를 조정하고 최적화
    
- 픽스토리 편집/삭제 기능 구현
  - 해당 픽스토리 내 편집 버튼 클릭 시 편집 모달창을 띄우고, 제목, 썸네일 이미지, 설명을 수정할 수 있도록 구현  
  - 해당 픽스토리 내 삭제 버튼 클릭 시 삭제 모달창을 띄우고, input창에 사용자가 직접 ‘삭제’ 키워드를 입력해 삭제할 수 있도록 구현
  
 |편집|삭제|
|---|----|
|![editpicstory-min](https://user-images.githubusercontent.com/63634174/175553685-ab1cb34b-7d79-4ef1-94da-ab1329489590.gif)|![deletepicstory-min](https://user-images.githubusercontent.com/63634174/175553683-58490143-12f8-4530-a82c-9da82dedd367.gif)|


### 글 작성

- 라디오 버튼 커스텀 훅으로 포스트 설정 체크 기능
    - 댓글허용여부/글공개여부/라이센스정보 체크방식 useRadioButton hook을 이용해 구현

![write_edit](https://user-images.githubusercontent.com/63634174/175554849-8bc4af4e-7968-492d-a0a6-336375b77ad7.png)

### 검색 페이지

![search-min](https://user-images.githubusercontent.com/63634174/175558054-3a782f44-c5ae-499b-92a5-3d06a9306263.gif)

- 포스트/작가/픽스토리 카테고리 별 레이아웃 및 검색 기능 구현
- 인기순/최신순 정렬 기능
- 검색 결과 기간 별 필터링 기능
    
![searchOpt-min](https://user-images.githubusercontent.com/63634174/175553672-6b129202-4108-453c-8cfc-881ed921b7e5.gif)



### 전시 아카이브
- 전시 등록 에디터 기능 개선
- 포스터 이미지 최적화

![exhibition-min](https://user-images.githubusercontent.com/63634174/175553670-90ffbab8-264f-434b-82ce-e8867ff38619.gif)

### 공통

![responsive](https://user-images.githubusercontent.com/63634174/171136961-e7acda7c-34a1-47d2-8931-9384c53fe4b0.gif)

- 반응형 웹 구현
    - 모바일 기기를 지원하는 반응현 웹으로 구현
