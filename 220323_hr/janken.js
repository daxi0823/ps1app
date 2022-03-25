let janken = () => {
  // プレイヤーの選んだ手をplayerHandに代入
  const radios = document.getElementsByName('hand');
  // ハコを先に作っておかないと、ifの中でしか使えない
  let result = '';
  let playerHand = ''
  let computerHand = ''
  let computerResult = ''

  for(let i = 0; i < radios.length ; i++) {
    // radiosで選択されていると、checkedの項目がtrueになっている
    // 
    if(radios[i].checked == true) {
      playerHand = radios[i].value;
    }
  }

  // コンピュータの選んだ手をcomputerHandに代入
  // =0-2のランダム
   computerHand = Math.floor(Math.random() * 3);
  if(computerHand == 0) {
    computerResult = 'グー'
    } else if(computerHand == 1) {
      computerResult = 'チョキ'
    } else if(computerHand == 2) {
    computerResult = 'パー'
    }
    // Math.random() 0-1の間でランダムな数字を返す
    // Math.floor() 小数点以下切り捨て

  // 勝ち負けを判定する
  if(playerHand == computerHand) {
    result = 'あいこです'
  } else if((playerHand == 0 && computerHand == 1)
  || (playerHand == 1 && computerHand == 2) 
  || (playerHand == 2 && computerHand == 0) ){
    result = 'プレイヤーの勝ちです'
  } else {
    result = 'コンピュータの勝ちです'
  }


  // 結果を表示する
  document.getElementById('disp1').innerHTML = 'コンピューターの手は' + computerResult + 'でした'
  document.getElementById('disp2').innerHTML = result;
}
