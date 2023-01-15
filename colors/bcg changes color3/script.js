(() => {
    function changeColor(color) { 
        document.body.style.background = color; 
    }

    document.getElementById("run").addEventListener("click", () => {//recuper la valeur sur l id du run en cherchant la couleurecrite en color//
        let color = document.getElementById("color").value;
          changeColor(color);
       
    });
})();