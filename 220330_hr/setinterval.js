let si = () => {
  const sti = setInterval( () => {
    console.log('AAA')
    // 1000ミリ秒毎に実行する
  }, 1000);


    // 時間表示　やってみる
// let si2 = () => {
//   document.getElementById('t').innerHTML = Date();

}

let so = () => {
  const sto = setTimeout(() => {
    // 1000ms後に実行する
    console.log('AAA');
  }, 3000);

  const sto2 = setTimeout(()=>{
    console.log('BBB');
  }, 2000);
  console.log('CCC')
}

