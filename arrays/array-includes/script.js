
(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
       // "pomme",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
      let el = "pomme";
      let cpt =0;
        for (var fruit of fruits) {
             if(fruit==el){
                
                  cpt++;
             }
  
             }
             if(cpt>0){
                 console.log(" oui il y a "+cpt+" pomme(s) dans le tableau  " );
             }else{
                  console.log(" non il n y a pas des pomme dans le tableau  " );
             }
  
       
    });
})();