{
  console.log(+0);
  console.log(-0);
  console.log(+0 == -0); //true
  console.log(+0 === -0); //true
}
// 一个是数字,另一个是undefined/null/布尔型/数字, 转化成数字进行加法运算
// 一个是数字,另一个是字符串, 进行字符串拼接
{
  console.log(1 + 0); //1
  console.log('1' + 0); //10
  console.log('s' + 0); //s0
  console.log(null + 0); //0
  console.log(undefined + 0); //NaN
  console.log(false + 0); //0
  console.log(true + 0); //1
}
// 所有类型转化成数字进行减法运算
{
  console.log(1 - 0); //1
  console.log('1' - 0); //1
  console.log('s' - 0); //NaN
  console.log(null - 0); //0
  console.log(undefined - 0); //NaN
  console.log(false - 0); //0
  console.log(true - 0); //1
}
