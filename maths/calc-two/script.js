
(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let num1 = document.getElementById("op-one").value;
        let num2 = document.getElementById("op-two").value;
        let a = parseFloat(num1);
        let b = parseFloat(num2);

        switch(operation) {
            case "addition":
               alert(a+b);
               break;

            case "substraction":
                alert(a-b);
                break;
                
            case "multiplication":
                alert(a*b);
                break;
                
            case "division" :
                alert(a/b);
                break;  

        }
      
        
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();