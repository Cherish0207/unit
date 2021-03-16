import { getDataCallback } from "./src/3.async";

/**
 * 总结：
 * 异步函数测试时，
 * 1.异步回调的方式--传入done方法，什么时候完成什么时候调用
 * 2.时间太久的话，可以使用同步的方式
 *    --mockTimer把异步代码变成同步的，替换掉定时器，代码就变成同步的了
 *    --此时就不能再加done了，否则代码就完不成了
 *    useFakeTimers+runAllTimers
 */

jest.useFakeTimers();
it("测试回调函数", () => {
  getDataCallback((data) => {
    // 默认不会等待异步执行完毕后才执行
    // 如果开发代码中需要等待6s以上，会超时
    // --不可能真的等待那么久
    // jest默认具备mock的能力 --> 对时间进行mock
    expect(data).toEqual({ name: "zf" });
  });
  jest.runOnlyPendingTimers(); // 只运行当前等待队列的一个
  // jest.advanceTimersByTime(100100); // 快进xx毫秒
});
