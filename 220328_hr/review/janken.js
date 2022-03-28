const janken = () => {
  let playerHand = 

  // ランダムはググる
  let computerHand = Math.floor(Math.random()*3);
  let result = '';
  // console.log(computerHand)
  if(playerHand == computerHand) {
    result = 'あいこです'
  
  }


  document.getElementById('disp') = result;
}