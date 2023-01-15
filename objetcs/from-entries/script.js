(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    

    document.getElementById("run").addEventListener("click", () => {
        
        const entries = keys.map((key, index) => [key, values[index]]);

        const obj = Object.fromEntries(entries);

        console.log(obj);

       
     
    });

})();