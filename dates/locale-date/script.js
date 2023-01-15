(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    function updateClock() {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        };
      
        let now = new Date();
        document.getElementById('target').innerHTML = now.toLocaleDateString("fr-FR", options);
      }
    setInterval(updateClock, 100);
})();