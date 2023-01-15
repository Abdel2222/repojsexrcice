(() => {


    document.getElementById("run").addEventListener("click", () => {
        const pass1 = document.getElementById("pass-one");
        const pass2 = document.getElementById("pass-two");

        if(pass1.value == pass2.value){
             alert("mot de passe identique");
        }else{
            pass1.style.borderColor = 'red';
            pass2.style.borderColor = 'red';
        }
      });
})();