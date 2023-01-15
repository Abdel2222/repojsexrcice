(() => {
    const fruits = new Set([
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
    ]);

    document.getElementById("run").addEventListener("click", () => {

      fruits.delete("pomme");
      fruits.delete("cerise");
      //le Set aprés la suppression
      console.log(fruits);

       fruits.add("banane");
       fruits.add("kiwi");
         // le Set apré l'ajout
         console.log(fruits);
        

          
         
      });
})();