## color-button 프로젝트를 통해 React 테스팅 연습하기

---

**[참고 사이트]**

screen 전역 객체를 사용해 테스팅 시 살펴보려는 요소(역할)를 찾을때 참고하면 좋은 사이트  
https://www.w3.org/TR/wai-aria/#role_definitions

jest-dom과 관련된 기능(커스텀 Matcher 등)  
https://github.com/testing-library/jest-dom

---

```js
// App.js
function App() {
  return (
    <div>
      <button style={{ backgroundColor: "red" }}>Change to blue</button>
    </div>
  );
}
```

```js
// App.test.js

/** 버튼의 초기상태에 올바른 조건이 적용됐는가 */
test("button has correct initial color", () => {
  render(<App />);

  // 1. 초기 텍스트가 Change to blue인 버튼 역할을 가진 요소를 찾는다
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // 2. 버튼의 초기 배경색이 빨간색인지 검사
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
```

---