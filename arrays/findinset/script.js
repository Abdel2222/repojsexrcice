
(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", () => {

      console.log(people.size);
         
         if(people.has("Alexandre")){
             return console.log("oui Alexandre fait partie du List");
         }else
           return console.log("non Alexandre ne fait pas partie du List");
        

          
         
      });
})();
