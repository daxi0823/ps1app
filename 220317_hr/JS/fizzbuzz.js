function fizzbuzz() {
  const num = document.getElementById('inputbox').value;
  if (parseInt(num) % 15 == 0) {
    document.getElementById('result').innerHTML = '"Yes, FizzBuzz!"';
  } else if (parseInt(num) % 3 == 0) {
    document.getElementById('result').innerHTML = '"Fizz!"';
  } else if (parseInt(num) % 5 == 0) {
    document.getElementById('result').innerHTML = '"Buzz!"';
  } else {
    document.getElementById('result').innerHTML = '"Non..."';
  }
}
