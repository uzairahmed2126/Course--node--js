// every module has their own scope
// before a modules code is executed, node.js will wrap it with a function wrapper that provides modules scope

const name = (first, last) => {
  return first + " " + last;
};
const fullName = name("uziar", "ahmed");
console.log(fullName);
// module.exports;
