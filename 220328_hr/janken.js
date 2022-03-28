const janken = () => {
  const hands = ['グー', 'チョキ', 'パー'];
  // コンソールログで、関数が読めているか確認
  // console.log('OK');
  let playerHand = document.getElementsByName('palyerhand');
  // console.log('playerhand');
  for(let i = 0; i < playerHand.length; i++);
    if(playerHand[i].checked == true) {
      playerHand = parseInt(playerHand[i].value);
    }


      // console.log('playerhand');
      const conputerHand = Math.floor(Math.random() * 3);
      console.log(computerHand);

      let message = '';
      const result = ( playerHand - computerHand + 3) % 3;
      if(result == 0) {
        message = 'あいこです';
      } else if(result == 1) {
        message = ''
      }
}

