let janken = () => {
  const radios = parseInt(document.getElementsByName('hand'));
  const hands = ['グー', 'チョキ', 'パー'];
  let result = '';
  let playerHand = '';

  for(let i = 0; i < 3; i++) {
    // if(radios.checked) = if(radios.checked == true)
    if(radios[i].checked) {
      let xxx = radios[i].value;
    }
  }
  const computerHand = Math.floor(Math.random() * 3);
  







}