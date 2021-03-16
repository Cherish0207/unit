// 异步代码
export const getDataCallback = (fn) => {
  setInterval(() => {
    fn({ name: "zf" });
  }, 100000);
};
