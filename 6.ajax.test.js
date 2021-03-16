// 用 __mocks__/6.ajax.js 替换掉真实的 6.ajax.js 文件
jest.mock("./src/6.ajax.js");
// 这个文件用假的 找同名的文件夹 去替换
import { fetchUser } from "./src/6.ajax"; // 这里实际上引入的是 __mocks__/6.ajax.js 文件
let { sum } = jest.requireActual("./src/6.ajax");
// mock的文件自动会找 __mocks__
it("测试能否获取用户", async () => {
  let r = await fetchUser();
  expect(r).toEqual({ name: "zf" });
});
// TypeError: (0 , _.sum) is not a function
it("测试求和函数", () => {
  expect(sum(1, 1)).toBe(2);
});
