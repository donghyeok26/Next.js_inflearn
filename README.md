2025.01.06
Streaming 기능

streaming이란 큰 데이터를 조각조각 나눠서 보내주는 역활 (넷플릭스, 왓챠 등 stremaing)
다이나믹 페이지에 유용하게 사용할 수 있음

with-searchbar -> search -> layout.tsx 실습연습

주의사항
1. layout파일처럼 해당경로 아래 페이지가 streaming이 적용됨
2. 비동기가 적용되지 않은 파일은 loading.tsx가 있어도 적용되지 않음
3. loading.tsx는 page.tsx에만 적용가능 -> 일반적인 파일에는 loading.tsx로 적용할 수 없음. -> 서스팬스기능을 이용해야함
4. querystring이 변경될때는 streaming이 적용되지 않음





suspense = 미완성되다
비동기작업을 하고있는 컴퍼넌트를 감싸면됨
한개의 페이지에서 여러개에서 사용할 수 있음

예시
<Suspense key={search.Params.q || ""} fallback={<div>Loading...<div/>
  <SearchResult/>
</Suspense>

fallback을 대체 UI로 사용할 수 있음
querystring이 변경됐을때 해결할 수 있음 key값사용

react에서는 key값이 변경되면 컴퍼넌트가 변경됐다 / 새로운 컴퍼넌트가 생겼다 라고 인식하는걸 이용한 기능




스켈레톤 UI
Suspense fallback에 컴포넌트를 넣어서 사용



error 핸들링

발생하는 모든error를 컨트롤하기 위해서 'use client'를 사용해서 컴포넌트 생성
(서버, 클라이언트 두개 다 발생)

error도 하위파일에 전부 적용됨
같은경로에 넣으면 상위에있는 error컴포넌트말고 원하는 컴포넌트의 error컴포넌트를 만들 수 있음

error의 타입은 javascript의 Error 사용
error는 reset이라는 props가 제공(함수) => 에러를 수정하기위해 한번 더 실행해보는 함수(서버컴포넌트는 다시 수행하지 않음)
onClick={()=>window.location.reload()} 사용해서 수정할 수 있지만 에러가 가끔 발생할 수 있음

router를 사용해서 error를 제거할 수 있음
router.refresh() reset()를 사용
refresh는 void여서 바동기를 사용할 수 없음
이때는 startTransition()사용 (하나의 콜백함수를 인수로 전달받아서 콜백함수 안에있는 UI를 변경하는 작업을 일괄적으로 처리)

reset의 타입은 void타입의 함수



서버액션
브라우저에서 제출이벤트가 발생했을때 formdata형식으로 진행할 수 있음
















