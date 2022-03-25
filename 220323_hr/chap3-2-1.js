let chap3_2_1 = () => {
  let shikin = 50000;
  while(shikin >= 0) {
    console.log(shikin);
    shikin -= 5080;
    // shikin = shikin -5080 と同義
    // 10回目は計算されるが、表示するまえにwhileの条件から外れるので表示されない
  }
}

let chap3_3_2 = () => {
  for( let cnt = 0; cnt < 10; cnt++) {
    console.log(cnt + '回目のハロー！')
  }
}

// cnt < 10回分 forで実行する
// 実行回数と実行内容を分けることで色々行う
let randomNumber = () => {
  for(let cnt = 0; cnt < 10; cnt++) {
    let num = Math.floor(Math.random() * 10);
    // Math.random() 0-1の間でランダムな数字を返す
    // Math.floor() 小数点以下切り捨て
    console.log(num + '回目のハロー！')
  }
}

let test1 = () => {
  let message = '';
  for(let j = 1; j < 10; j++) {
    for(let i = 1; i < 10; i++) {


      if(i * j < 10) {
        message = message + ' 0' + (i * j);
      } else {
          message = message + ' ' + (i * j);
      }
    }
    // 改行を入れるタイミング iが1-9まで計算されたタイミング
    message = message + '<br>'
  }
  document.getElementById('disp').innerHTML = message;
}


// let chap3_3_3 = () => {
//   let shikin = 50000
//   for(let cnt = 0; )
//   while(shikin > 0) {
//     shikin -= 5500

//   }
// }
