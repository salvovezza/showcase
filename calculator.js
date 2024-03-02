let calculation = '';      

    updateScoreElement();  

      function mainCalculation(strParameter) {        
        calculation += strParameter;
        
        document.querySelector('.total-display').innerHTML = calculation;               
      }

      function displayCalculation(calculation) {
        if (calculation !== '') {
           document.querySelector('.total-display-next').innerHTML = ` = ${calculation}`;
           localStorage.setItem('calculation2', JSON.stringify(calculation)); 
           document.querySelector('.yes-display').innerHTML = `Calculation is: ${calculation}`; 
           console.log('here');
        }     
      } 

      function updateScoreElement() {   
        let calculation3 = JSON.parse(localStorage.getItem('calculation2'));       

        if (calculation3 === null) {
          calculation3 = 0;
          document.querySelector('.yes-display').innerHTML = `Calculation is: ${calculation3}`;
        }

        document.querySelector('.yes-display').innerHTML = `Calculation is: ${calculation3}`;         
      }      
