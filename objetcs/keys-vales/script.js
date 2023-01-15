(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    document.getElementById("run").addEventListener("click", () => {
          // affiche les clés de person
        console.log(Object.keys(person))

        //afficher les valeurs de person
        console.log(Object.values(person))
       
      });
})();