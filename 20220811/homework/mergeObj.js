obj = {
  name: '不告诉你',
  gender: '男',
};
obj2 = {
  age: 18,
};
obj3 = {
  province: 'fujian',
  gender: '女',
};

{
  const newobj = Object.assign(obj, obj2, obj3);
  console.log(newobj);
}
{
  const newobj = { ...obj, ...obj2, ...obj3 };
  console.log(newobj);
}
