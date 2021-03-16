import { map } from "./src/4.map";

// mock fn
// 测试 前端代码里可能有一些ajax 请求 在测试的时候 更改接口的表现
it("测试map方法", () => {
  //   map([1, 2, 3], (data) => {
  //     expect(data).toBe(1);
  //   });
  // jest.fn模拟一个方法,让用户调用,用户调用这个函数的所有信息.都会被记录到当前的mock属性上
  let fn = jest.fn(); // 模拟函数可以记录被执行的过程 这是jest帮我们提供的一个假的函数
  map(["a", "b", "c"], fn);
  //   console.log(fn.mock);
  /**
    fnMock = {
        // [传参，索引]
        calls: [
            ["a", 0],
            ["b", 1],
            ["c", 2],
        ],
        instances: [undefined, undefined, undefined],
        invocationCallOrder: [1, 2, 3],
        results: [
            { type: "return", value: undefined },
            { type: "return", value: undefined },
            { type: "return", value: undefined },
        ],
    };
 */
  expect(fn.mock.calls.length).toBe(3);
  expect(fn.mock.calls[0][0]).toBe("a");
  expect(fn.mock.calls[1][0]).toBe("b");
  expect(fn.mock.calls[2][0]).toBe("c");
  expect(fn).toHaveBeenCalled();
  // calls 就是如果这个函数被调用了
  expect(fn).toHaveBeenCalledTimes(3);
});
