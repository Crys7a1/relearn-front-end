{
  //find 返回数组中满足的第一个元素的值
  const array1 = [5, 12, 8, 130, 44];
  const foundValue = array1.find((el) => el > 10);
  console.log(foundValue);
}
{
  //findIndex 返回数组中满足的第一个元素的索引
  const array1 = [5, 12, 8, 130, 44];
  const foundKey = array1.findIndex((el) => el > 10);
  console.log(foundKey);
}
