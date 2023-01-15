(() => {
    function getAge(date) {
        let diff = Date. now() - date. getTime();
        let age = new Date(diff);

        return (Math. abs(age. getUTCFullYear - 1970));
        }
      


    document.getElementById("run").addEventListener("click", () => {
        let day = document.getElementById("dob-day").value;
        alert(day);
        let month = document.getElementById("dob-month").value;
        alert(month);
        let year = document.getElementById("dob-year").value;

        alert(getAge(new Date(year, month, day)));
     
  });
})();