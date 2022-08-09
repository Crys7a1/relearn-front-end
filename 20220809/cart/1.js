let cart = {};
function add_cart(btn) {
  //向上两级获取tr
  const tr = btn.parentNode.parentNode;
  //获取td
  let tds = tr.children;
  //获取商品名
  const name = tds[0].innerText;
  //获取价格
  const price = +tds[1].innerText;
  //如果已有此商品
  if (cart[name]) {
    let row = findByGoodsName(name);
    let quantity = row.children[2].children[1].value;
    let price = +row.children[1].innerText;
    row.children[2].children[1].value = ++quantity;
    row.children[3].innerText = quantity * price;
  } else {
    cart[name] = 1;
    const row = document.createElement('tr');
    row.innerHTML = ` 
            <td>${name}</td> <td>${price}</td> <td align="center"> <input type="button" value="-" onclick="decrease(this)" /> <input type="text" size="3" readonly value="1" /> <input type="button" value="+" onclick="increase(this)" /> </td> <td>${price}</td> <td align="center"><input type="button" value="x" onclick="del(this)" /></td> `;
    document.querySelector('#goods').appendChild(row);
  }
  calcTotalValue();
}
function findByGoodsName(name) {
  //获取购物车
  const goods = document.querySelector('#goods');
  //获取购物车里的所有商品
  let trs = goods.children;
  let result;
  for (const tr of trs) {
    if (tr.children[0].innerText == name) {
      result = tr;
      break;
    }
  }
  return result;
}
function del(btn) {
  console.log(cart);
  let tr = btn.parentNode.parentNode;
  let tds = tr.children;
  //获取商品名
  const name = tds[0].innerText;
  //获取价格
  //   const price = +tds[1].innerText;
  delete cart[name];
  tr.remove();
  //   delete cart[price];
  calcTotalValue();
}

function increase(btn) {
  let input = btn.previousElementSibling;
  let quantity = +input.value;

  input.value = ++quantity;
  const tr = btn.parentNode.parentNode;
  const price = tr.children[1].innerText;
  tr.children[3].innerHTML = quantity * price;
  calcTotalValue();
}
function decrease(btn) {
  const tr = btn.parentNode.parentNode;
  let input = btn.nextElementSibling;
  let quantity = +input.value;
  if (quantity < 1) {
    let tds = tr.children;
    //获取商品名
    const name = tds[0].innerText;
    //获取价格
    //   const price = +tds[1].innerText;
    delete cart[name];
    tr.remove();
    return;
  }
  input.value = --quantity;
  const price = tr.children[1].innerText;
  tr.children[3].innerHTML = quantity * price;
  calcTotalValue();
}
function calcTotalValue() {
  const goods = document.querySelector('#goods');
  let trs = goods.children;
  let result = 0;
  for (const tr of trs) {
    result += +tr.children[3].innerText;
  }
  document.querySelector('#total').innerText = result;
}
