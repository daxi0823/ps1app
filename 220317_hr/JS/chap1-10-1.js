function plus80() {
  // inputタグに入力された文字を受け取る「.valueを忘れない」
  const num = document.getElementById('inputnum').value;

  // 「document.getElementById('')」部分は、ある程度定型（後ほど変形が出てくるが）
  // JS(のvalue)で取得した入力内容は文字列→ 「parseInt」で数値化
  document.getElementById('result').innerHTML = parseInt(num) + 80;
}
