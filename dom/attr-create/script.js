(() => {
      const img= document.getElementById ('source') ;
      const url = img.getAttribute("data-image");

     var monImage = document.createElement('img');
     monImage.src=url;

     const target = document.getElementById("target");
     target.appendChild(monImage);


     img.remove();

})();