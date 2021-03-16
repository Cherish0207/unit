// 异步代码
export const getDataCallback = (fn) => {
  setInterval(() => {
    fn({ name: "zf" });
  }, 100000);
};
export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "zf" });
    }, 1000);
  });
};
