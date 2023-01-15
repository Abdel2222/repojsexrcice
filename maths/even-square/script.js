(() => {
    document.getElementById("run").addEventListener("click", () => {

        let nombres = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
       
       // sauter de 2 nombres sans iffor(let i= 0; i<=nombres.length; i+2 )//
        for(let i= 0; i<=nombres.length; i++ ){
            if(nombres[i]%2 == 0){
               alert("les nombres carrés entre 1 et 21 sont :"+' '+ +(nombres[i]*nombres[i]));
            }
        
    }
});
})();