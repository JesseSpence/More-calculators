// body mass index, declare variables height and weight from the input 
function calcBMI() {
    let weight = document.bmiform.kilograms.value, height = document.bmiform.meters.value;
//calculate and give answer as int 
    document.bmiform.bmi.value = parseInt(weight  / (height * height));
  } 
  
  
  function toCelsius() {
              let celsius= (document.getElementById('userInput').value-32) * 5 / 9;
              celsius=Math.round(celsius);
              document.getElementById('result').innerHTML=userInput.value +" Fahrenheit is "+ celsius 
              + " celsius";
          }
  
          function toFahrenheit(){
              let fahrenheit= document.getElementById('userInput').value * 9 / 5+ 32;
              celsius=Math.round(fahrenheit);
              document.getElementById('result').innerHTML=userInput.value +" Celsius is "+ fahrenheit + " fahrenheit";
  
          }