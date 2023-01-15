(() => {
    const img = document.querySelector('img');

  

    const hover = img.getAttribute('data-hover');
    const src = img.getAttribute('src');
  
    img.addEventListener('mouseover',()=>{
        img.src = hover;
    })
    image.addEventListener('mouseout', function() {
        img.src = src;
    });
})();