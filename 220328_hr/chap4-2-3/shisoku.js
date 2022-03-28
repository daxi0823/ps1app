let enzan = () => {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  let operator = document.getElementsByName('enzan');
  // 


  // console.log(operator);
  // document.getElementById('disp').innerHTML = num1 + num2


  let shisoku = (num1, num2, operator) => {
    for(let i = 0; i < operator.length; i++) {
      if(operator[i].checked == true) {
        operator = operator[i].value;
      }
    }

    let result;
    if(operator == '+') {
      result = num1 + num2;
    } else if(operator == '-') {
      result == num1 - num2;
    } else if(operator == '*') {
      result == num1 * num2;
    } else if(operator == '/') {
      result == num1 / num2;
    } else if(operator == '%') {
      result == num1 % num2;
    }
    return result;
  }

  document.getElementById('disp').innerHTML = shisoku(num1, num2, operator);

}



