// 对ur1参数进行解析 a=1&b=2&c=3  =>  {a:1,b:2,C:3}
const parser = (str) => {
  const obj = {};
  str.replace(/([^&=]+)=([^&=]+)/g, function () {
    obj[arguments[1]] = arguments[2];
  });
  return obj;
};
const stringify = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }
  return arr.join("&");
};

// 1,会污染源代码
// 2,代码上线会被压缩,无法保留测试
// 3,最后我们希望对代码进行模块化操作
// ---> 把代码导出，把测试的代码分离出去
console.log(parser("a=1&b=2&c=3"));
console.log(stringify({ a: "1", b: "2", c: "3" }));

export { parser, stringify };
