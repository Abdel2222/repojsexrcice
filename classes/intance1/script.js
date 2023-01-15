(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        
         c1  = new Cat("SKitty",9);
         c2  = new Cat("Pixel",6);

         console.log(c1)
         console.log(c2)

       
     
    });
})();