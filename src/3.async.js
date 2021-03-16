// 异步代码
export const getDataCallback = (fn) => {
  setTimeout(() => {
    fn({ name: "zf" });
  }, 1000);
};
