let cart = [];
// function getIndexByName(name) {
//   //如果购物车里没有商品
//   let result = -1;
//   //遍历购物车
//   cart.forEach((obj, index) => {
//     //如果商品名 = 购物车里的商品名 返回他们的索引
//     if (obj.name == name) {
//       result = index;
//     }
//   });
//   return result;
// }

function getIndexByProp(prop, value) {
  let result = -1;
  for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    if (element[prop] === value) {
      result = index;
      break;
    }
  }
  return result;
}

function getMaxId() {
  // 没有商品id为1
  if (cart.length == 0) {
    return 1;
  } else {
    //有商品,id为最后一位
    return cart[cart.length - 1].id + 1;
  }
}
function calcTotalInfo() {
  let totalPrice = 0;
  let totalQuantity = 0;
  for (const item of cart) {
    if (item.checked) {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    }
  }
  return [totalPrice, totalQuantity];
}
function handleSelect(id, obj) {
  const index = getIndexByProp('id', id);
  cart[index].checked = obj.checked;
  render();
}
function render() {
  let tbody = document.querySelector('#goods');
  tbody.innerHTML = '';
  let trs = '';
  for (const data of cart) {
    let row = `
        <tr>
        <td align="center">
          <input type="checkbox" ${data.checked ? 'checked' : ''}
          onclick="handleSelect(${data.id},this)" />
        </td>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td align="center">
          <input type="button" id="decreaseBtn" value="-" onclick="decrease(${data.id})" />
          <input type="text" size="3" readonly value="${data.quantity}" />
          <input type="button" value="+" onclick="increase(${data.id})" />
        </td>
        <td>${data.price * data.quantity}</td>
        <td align="center">
          <input type="button" value="x" onclick="del(${data.id})" />
        </td>
      </tr>
        `;
    trs += row;
  }
  tbody.innerHTML = trs;

  let [totalPrice, totalQuantity] = calcTotalInfo();
  document.querySelector('#total_quantity').textContent = totalQuantity;
  document.querySelector('#total_price').textContent = totalPrice;

  //选中
  document.querySelector('#checkall').checked = cart.every((item) => item.checked);
}
function add_cart(btn) {
  const tr = btn.parentNode.parentNode;
  let tds = tr.children;
  const name = tds[0].innerHTML;
  const price = +tds[1].innerHTML;
  //获取索引
  const index = getIndexByProp('name', name);
  //如果购物车里没有商品
  //添加
  if (index < 0) {
    cart.push({
      id: getMaxId(),
      name,
      price,
      quantity: 1,
      checked: false,
    });
  } else {
    //如果有,数量加一
    cart[index].quantity++;
  }
  render();
}
function increase(btn) {
  const index = getIndexByProp('id', btn);
  cart[index].quantity++;
  render();
}

function handleSelectAll(obj) {
  for (const item of cart) {
    item.checked = obj.checked;
  }
  render();
}
function decrease(btn) {
  const index = getIndexByProp('id', btn);
  console.log(cart[index].quantity);
  if (cart[index].quantity <= 1) {
    return;
  } else {
    cart[index].quantity--;
  }
  render();
}

function del(id) {
  let index = getIndexByProp('id', id);
  cart.splice(index, 1);
  render();
}
