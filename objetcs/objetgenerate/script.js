
(() => {
    function Presentation(lastname,firstname,age,city,country) {
    this.lastname=lastname ;
    this.firstname=firstname;
    this.age=age ;
    this.city=city;
    this.country=country;
    }

    document.getElementById("run").addEventListener("click", () => {
       let p = new Presentation("Abdelbaki","Abdelbaki",35,"Bruxelles","Belgium")

       console.log(p);
    });
})();