
    var tbl = '<table><tbody>';
    
    for (let i = 1; i <= 10; i++) {
      tbl += '<tr>';
      for (let j = 1; j <= 10; j++) {
        tbl += `<td>${i * j}</td>`;
      }
      tbl += '</tr>';
    }
    
    tbl += '</tbody></table>';
    
    target.innerHTML = tbl;
    
  
      
})();