## color-button 프로젝트를 통해 React 테스팅 연습하기

---

**[참고 사이트]**

screen 전역 객체를 사용해 테스팅 시 살펴보려는 요소(역할)를 찾을때 참고하면 좋은 사이트  
https://www.w3.org/TR/wai-aria/#role_definitions

jest-dom과 관련된 기능(커스텀 Matcher 등)  
https://github.com/testing-library/jest-dom

---

### 1. 버튼의 초기 상태 테스팅하기

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

---

### 2. 버튼을 클릭했을때 의도한 기능이 작동하는지 테스팅하기

```js
// App.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/** 버튼의 초기상태에 올바른 조건이 적용되어있으며 버튼 클릭 시 의도한 동작이 이루어지는가 */
test("button has correct initial color, and updates when clicked", () => {
  render(<App />);

  // 1. 초기 텍스트가 Change to blue인 버튼 역할을 가진 요소를 찾음
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // 2. 버튼의 초기 배경색이 빨간색인지 검사
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // 3. 버튼을 누름
  fireEvent.click(colorButton);

  // 4. 버튼의 배경색이 파란색으로 변하는지 확인
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // 5. 버튼의 텍스트가 Change to red로 변하는지 확인
  expect(colorButton).toHaveTextContent("Change to red");
});
```

fireEvent: 이벤트 트리거

이후 작성한 테스트 코드에 맞춰 기능 코드 작성

```js
// App.js

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const clickButton = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          clickButton();
        }}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}
```

---

### 3. logRoles

코드가 길어서 역할이 있는 항목들이 헷갈릴 경우 logRoles를 사용하면 유용하다.

```js
import { logRoles } from "@testing-library/react";

test("button has correct initial color", () => {
  // 이 부분을 추가
  const { container } = render(<App />);
  logRoles(container);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
```

logRoles(container); 에 대한 출력

```
  console.log
    button:

    Name "Change to blue":
    <button
      style="background-color: red;"
    />
```

---
