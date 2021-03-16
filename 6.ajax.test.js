// 用 __mocks__/6.ajax.js 替换掉真实的 6.ajax.js 文件
jest.mock("./src/6.ajax.js");
// 这个文件用假的 找同名的文件夹 去替换
import { fetchUser } from "./src/6.ajax"; // 这里实际上引入的是 __mocks__/6.ajax.js 文件

// mock的文件自动会找 __mocks__
it("测试能否获取用户", async () => {
  let r = await fetchUser();
  expect(r).toEqual({ name: "zf" });
});
