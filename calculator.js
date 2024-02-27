let calculation = '';
      function mainCalculation(strParameter) {
        calculation += strParameter;
        
        console.log(calculation);
      }
     
     function calculateEqual (calculation) {
      document.querySelector('.js-calculation').innerHTML = calculation;
      calculation = 0;
     }       