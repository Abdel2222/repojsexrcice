(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    document.getElementById("run").addEventListener("click", () => {
        const adjectiveArray = Array.from(adjectives);

        let rand = Math.floor(Math.random() * birds.length);
        let ouiseau= birds[rand];

        let rand1 = Math.floor(Math.random() * adjectives.size);
        let adj= adjectiveArray[rand1];

         let symbole="Le";
        if(ouiseau.fem){
            symbole="La";
            return  document.getElementById('target').innerHTML =`${symbole} ${ouiseau.name} ${adj}e`;
        }
         else{

        document.getElementById('target').innerHTML =`${symbole} ${ouiseau.name} ${adj}`;
        
         }
    });
})();