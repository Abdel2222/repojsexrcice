(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        sayHello() {
            return  `hello ${this.firstname} ${this.lastname}`;
            
        }
    
}
    document.getElementById("run").addEventListener("click", () => {
        
         c = new Person("Abdelbaki","Bendahou");
         console.log(c.sayHello());

       
     
    });
})();