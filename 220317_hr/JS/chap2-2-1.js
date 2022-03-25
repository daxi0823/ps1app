function checkNaN() {
  // 入力内容の判別なので、「.value」必須
  const doc = document.getElementById('inputText').value;
  if (isNaN(doc)) {
    // isNaN(doc)がtrueの場合 =数値じゃない
    document.getElementById('result').innerHTML = '数値じゃない';
  } else {
    // isNaN(doc)がfalseの場合　=数値である
    document.getElementById('result').innerHTML = '数値である';
  }
}