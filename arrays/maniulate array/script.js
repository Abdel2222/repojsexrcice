(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", () => {

        fruits.shift();
        fruits.pop();

        alert("la liste des fruit aprés la suppression :"+fruits);
        
      fruits.push("kiwi");
      fruits.unshift("banane");

      alert("la liste aprés l'ajout :"+fruits);
     
  });

    
})();