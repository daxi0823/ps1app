function plus(plusnumber) {
  // inputタグに入力された文字を受け取る「.valueを忘れない」
  const num = document.getElementById('inputnum').value;
  // 変数numの内容に80を足して、id='result'のついたタグの中に表示する
  document.getElementById('result').innerHTML = parseInt(num) + plusnumber;
}
  // 
function plusnum(num1, num2) {
  document.getElementById('result').innerHTML = num1 + num2;
}
