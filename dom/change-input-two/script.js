(() => {
    const input = document.getElementById("pass-one");
    const valid = document.getElementById("validity");
   
   input.addEventListener("input", ({ target: { value } }) => {
      const char = value.length >= 8;
      const num = /\d/.test(value) && /\d/.test(value.replace(/\d/, ''));
      if (char && num) {
            valid.innerHTML="ok";
        } 
    });
})();