(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let now = new Date();
    
      alert(now.getHours());
      if(now.getHours()<18){

         document.getElementById("target").innerHTML = "Bonjour";

      }else if(now.getHours()>18){

        document.getElementById("target").innerHTML = "Bonsoir";
      }
})();