(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let numbers = document.getElementById("numbers").value; 
          
      alert( numbers) ;
      const array = numbers.split(', ').map(Number);
      array.sort((a, b) => a - b);
      const result = array.join(', ');
      
      alert(result);
 
      
    });
})();