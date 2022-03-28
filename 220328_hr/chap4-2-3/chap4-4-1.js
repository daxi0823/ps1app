let addCharge = (bill) => {
  return bill * 1.07;
}

let chargeTest = () => {
  const result = 
    addCharge(40000) + addCharge(20000);

  document.getElementById('disp').innerHTML = result;
}