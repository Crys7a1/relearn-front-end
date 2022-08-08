'use strict'
const person = {
  name: '->->',
  gender: 'male',
  address: {
    province: '福建省',
    city: '福州市',
  },
  introduce() {
    console.log('hello')
  },
  '剪 头 发': function () {
    console.log('剪头发')
  },
  '打 豆 豆': function () {
    console.log('打豆豆')
  },
}
person.introduce()
person['剪 头 发']()
person['打 豆 豆']()
