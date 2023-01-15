    let now = new Date();
    
    alert(now.getHours());
    alert(now.getMinutes());
    if((now.getHours()===17  && now.getMinutes()<=30) || (now.getHours()<=17) ){

       document.getElementById("target").innerHTML = "Bonjour";

    }else{

      document.getElementById("target").innerHTML = "Bonsoir";
    }
})();