(() => {
    
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    function changeColor(color) { 
        document.body.style.background = color; 
    }

    document.getElementById("run").addEventListener("click", () => {
        
          changeColor(getRandomColor());
       
    });
})();