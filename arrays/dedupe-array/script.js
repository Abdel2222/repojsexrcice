
(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", () => {

        json_array = fruits.map(JSON.stringify);
        set = new Set(json_array);
        new_array = Array.from(set);
       
         
         console.log(new_array);
        

          
         
      });
    
})();