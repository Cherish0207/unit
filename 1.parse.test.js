// 测试文件默认一般以.test.js结尾/spec.js结尾
import { expect } from "@jest/globals";
import { parser, stringify } from "./src/1.parser";
// describe: 套件,里面放的是一堆用例(it)
describe("测试parser", () => {
  it("测试parser是否能正常解析", () => {
    // parser("a=1&b=2&c=3") === { a: "1", b: "2", c: "3" };
    expect(parser("a=1&b=2&c=3")).toEqual({
      a: "1",
      b: "2",
      c: "3",
    });
  });
});
describe("测试stringify", () => {
  it("测试stringify是否能正常解析", () => {
    stringify({ a: "1", b: "2", c: "3" }) === "a=1&b=2&c=3";
  });
});
