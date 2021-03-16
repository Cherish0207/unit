
import { addNode, removeNode } from "./src/2.dom";

// jest 具备jsdom 功能 jsdom环境 可以有dom的概念
it("测试能否正常添加dom节点", () => {
  // jsdom 假的dom
  document.body.innerHTML = `<div id="wrapper"></div>`;
  const button = document.createElement("button");
  const wrapper = document.querySelector("#wrapper");
  addNode(button, wrapper);
  let btn = wrapper.querySelector("button");
  expect(btn).not.toBeNull();
});
it("测试能否正常删除dom节点", () => {
  // jsdom 假的dom
  document.body.innerHTML = `<div><button id="btn"></button></div>`;
  let btn = document.querySelector("#btn");
  expect(btn).not.toBeNull(); // 刚开始btn 是否存在
  removeNode(btn);
  btn = document.querySelector("#btn");
  expect(btn).toBeNull(); // btn是否被删除掉了
});
// 不停的测试对应的逻辑,单元測试就是测试某个方法是否能达到我的预期效果
