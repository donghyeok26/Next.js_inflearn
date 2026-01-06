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



















