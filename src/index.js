import dep from './dep';

const a = () => {
  return false;
};

const dep2 = a();

Object.assign({}, dep2);
console.log('aa2223111112', dep, dep2);
