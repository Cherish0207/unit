import { flip } from "./src/5.coverage";

it("测试flip方法", () => {
  expect(flip(true)).toBe("right");
  expect(flip(false)).toBe("wrong");
});
