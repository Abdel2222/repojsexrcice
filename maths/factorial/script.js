(() => {
    // to get the value of an input: document.getElementById("element-id").value
    function fact(nbr){
         f = 1;//start0 donc resulat tjrs 0//
        for(let i = 1; i <= nbr; i++)  
        {
           f *= i;
        }  
        return f;
    }
    document.getElementById("run").addEventListener("click", () => {
        let number = document.getElementById("number").value; 
        let a = parseFloat(number);
      //typeof also =="number"//    if(Number.isFinite(a)){
             alert(fact(a));
          }else
            alert('is not number try again !!!');
    });
})();