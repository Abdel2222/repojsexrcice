(() => {
  let numbers = new Array();

  function remplir() {
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 100) + 1);
      document.getElementsByTagName("td")[i].innerHTML = numbers[i];
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    remplir();
    document.getElementById("min").innerHTML = Math.min(...numbers);
    document.getElementById("max").innerHTML = Math.max(...numbers);
    let sum = numbers.reduce((total, num) => total + num, 0);
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("average").innerHTML = sum / numbers.length;
  });
})();
