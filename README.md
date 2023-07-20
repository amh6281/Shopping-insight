<div align="center">
  <h1>네이버 쇼핑 인사이트 연령별 트렌드 조회</h1>
</div>
  <br />
  
## 프로젝트 소개
> <b>해당 프로젝트는 네이버 Open API에서 제공하는 연령별 트렌드를 조회할 수 있는 웹 애플리케이션입니다.</b>
  <br />
  <br />

### 결과 화면
<img src="https://github.com/amh6281/Shopping-insight/assets/83646986/a45d5200-4ae5-4a84-b622-1224b1053e82"/>
  <br />
  
### 실행 GIF
<img src="https://github.com/amh6281/Shopping-insight/assets/83646986/bda1b277-1101-45e9-b4eb-0fd322f8e4d6"/>
  <br />
  <br />
  
## 사용 스택
* React + TypeScript
* Styled-Components
* Redux-toolkit
* Node.js + Express.js
  <br />
  <br />

## 구현 내역
* 네이버 Open API를 사용하여 연령별 트렌드 조회 데이터 사용
* Chart Library(Recharts)를 사용한 데이터 시각화
* 사용자가 입력한 입력값 및 결과값은 Redux store에 저장
  * (필수) 시작/종료 날짜 - React-datepicker 사용
  * (필수) 카테고리 - Select, Option 사용
  * (필수) 키워드 - Input 사용
  * (필수) TimeUnit - Select, Option 사용
  * (선택) Ages - Checkbox 사용
  * (선택) Gender - Select, Option 사용
  * (선택) Device - Select, Option 사용
* React-Persist를 사용하여 새로고침 시 입력값 및 Chart data 유지
* Redux Toolkit을 사용하여 비동기 처리(API 호출)
  <br />
  <br />

## CORS 에러 해결
* cors 미들웨어를 사용하여 CORS 에러 해결
  <br />
  <br />

## 프로젝트 실행 방법
1. **레포지토리 클론 :** `https://github.com/amh6281/Shopping-insight.git`
2. **종속성 설치 :** `yarn`
3. **환경 변수 세팅 :** ([네이버 개발자 센터](https://developers.naver.com/apps/#/register) API Key 발급) `REACT_APP_NAVER_CLIENT_[ID|SECRET]` 입력
4. **프로젝트 시작 :** `yarn run dev`
  <br />
  <br />
