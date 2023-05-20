import { render, screen } from "@testing-library/react";
import App from "./App";

/** 버튼의 초기상태에 올바른 조건이 적용됐는가 */
test("button has correct initial color", () => {
  render(<App />);

  // 초기 텍스트가 Change to blue인 버튼 역할을 가진 요소를 찾는다
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // 버튼의 초기 배경색이 빨간색인지 검사
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

/** 버튼 클릭시 올바른 기능이 작동하는가 */
test("button turns blue when clicked", () => {});
