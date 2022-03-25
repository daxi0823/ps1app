let fizzbuzz = () => {
  const moji = parseInt(document.getElementById('num').value);
  let message = '';

  // !で結果を逆に
  if(!isNaN(moji)) {
    // 数値に変換できる場合
    
    const num  = parseInt(moji);

    if(num % 3 == 0 && num % 5 == 0) {
      message = 'fizzbuzz';
    } else if(num % 3 == 0) {
      message = 'fizz';
    } else if(num % 5 == 0) {
      message = 'buzz';
    } else {
      message = '';
    }
  } else {
    // 数値に変換できない場合
    message = '数値以外は入力できません！';
  }


  document.getElementById('disp').innerHTML = message;
}