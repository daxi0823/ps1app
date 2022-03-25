function checkSeireki() {
  const num = document.getElementById('seireki').value;
  if (parseInt(num) % 400 == 0) {
    document.getElementById('result').innerHTML = '閏年！！';
  } else if(parseInt(num) % 100 == 0) {
    document.getElementById('result').innerHTML = '閏年ではない...';
  } else if(parseInt(num) % 4 == 0) {
    document.getElementById('result').innerHTML = '閏年！！';
  } else {
    document.getElementById('result').innerHTML = '閏年ではない...';
  }
}