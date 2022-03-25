let hairetsu = () => {
  const wdays = ['月', '火', '水', '木', '金'];
  document.getElementById('disp1').innerHTML = wdays[1];
  // console.log(wdays);
  document.getElementById('disp2').innerHTML = wdays.length;
}

// 関数は、letでもconstでも、現状はどっちでもOK
// 変数
let weekdays = () => {
  const wdays = ['月', '火', '水', '木', '金', '土', '日'];
  for(let day of wdays) {
    // let ~ of ~ は配列にしか使わない
    // 変数dayに、配列wdaysの長さ分
    console.log(day + '曜日');
  }


  // 要素の数が変わる場合には、配列.lengthで指定しておくと、
  // 後々変更する手間がなくなる
  // // ただそもそも上の書き方をしておくと、指定する必要はない
  // for(let cnt = 0; cnt < wdays.length; cnt++) {
  //   console.log(wdays[cnt] + '曜日')
  // }
}
