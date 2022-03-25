function showInputText() {
  // id="inputtext"のついたタグに入力された内容`(value)を、変数mojiに代入
  const moji =  document.getElementById('inputtext').value;

  // 文字をid="moji"のついたタグの中に変数mojiの中身を表示する
  // JSでvalueに代入されたものは、数値・文字列とも「文字列」として認識
  // そのため、入力boxに入力されたものは必ず文字となる。
    document.getElementById('moji').innerHTML = moji;
  }