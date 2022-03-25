// function leapyearCheck() {
// }

// 以下がモダンな書き方
let leapyearCheck = () => {
  // const 定数
  // parseInt 受け取った文字を数値に変換
  // document.getElementById('') idを基準に文字を受けとる
  // .value  入力された内容
  const year = parseInt(document.getElementById('ad').value);
  let message = '';
  // 閏年判定



  // それ以外->ではない

  if(year % 400 == 0) {
  // 400で割り切れる->うるう年
    message = 'うるう年である';
  } else if(year % 100 == 0) {
  // 100で割り切れる->うるう年ではない
    message = 'うるう年ではない';
  } else if(year % 4 == 0) {
  // 4で割り切れる->うるう年
    message = 'うるう年である';
  } else {
    message = 'うるう年ではない';
  }
  document.getElementById('disp').innerHTML = message;
}