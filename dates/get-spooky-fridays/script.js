(() => {
    document.getElementById('run').addEventListener('click', ()=>{
        let year = document.getElementById('year').value;
        const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        
        let output = '';
        for (let month = 0; month < 12; month++) {
          const date = new Date(year, month, 13);
         // console.log(date)
          if (date.getDay() === 5) {
            let monthName = months[month];
            output += `<p>${monthName}</p>`;
          }
        }
        alert(output)
     })
  
     
  });
})();