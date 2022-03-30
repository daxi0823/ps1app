// let chap5 = () => {
// 関数に入れていると、何某かのactionnに対して関数が実行されると、中身が実行される
// 関数に入れていないと、HTMLが読み込まれたタイミングで、JSも読み込まれる

  let ipt = document.querySelector('input');
  let btn = document.querySelector('button');
  let elem = document.querySelector('p');

  btn.addEventListener('click', () => {
    elem.innerText = ipt.value;
  })
// }