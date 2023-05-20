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