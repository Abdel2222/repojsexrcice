(()=> {
    function checkNbr(n) {
          if( n % 15 === 0 ){
              alert("fizzbuzz");
            
          }else if(n % 3 === 0 ){
            alert("fizz");
          }else if(n % 5 === 0){
            alert("buzz");
          }
          else alert(n);
    
      }
      let nbr = prompt("Entrez un nombre entre 1 et 100 ?");

       if(nbr >0 && nbr <=100){
           checkNbr(nbr);
       }else
        alert(" ERREEUR !! ")

})();