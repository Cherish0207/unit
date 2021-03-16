// 写dom元素 最常见的功能

// 写了一个dom库
export const addNode = (node, parent) => {
  parent.appendChild(node);
};
export const removeNode = (node) => {
  node.parentNode.remove(node);
};

// todo...
