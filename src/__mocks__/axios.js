// 可以自己在根目录下建立一个__mocks__文件夹 来mock掉 
// 第三方的模块 文件名要和模块名相同
export default {
  get(url) {
    if (url === "/user") {
      return new Promise((resolve, reject) => {
        resolve({ name: "zf" });
      });
    }
  },
};
