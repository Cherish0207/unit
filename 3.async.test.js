import { getDataCallback } from "./src/3.async";

it("测试回调函数", (done) => {
  getDataCallback((data) => {
    // 默认不会等待异步执行完毕后才执行
    // 异步函数测试时，可以传入done方法
    expect(data).toEqual({ name: "zf" });
    done();
  });
});
