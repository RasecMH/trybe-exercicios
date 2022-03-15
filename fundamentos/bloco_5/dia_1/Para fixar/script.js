const header = document.querySelector('#header-container');
header.style.backgroundColor = 'green'

const emergency = document.querySelectorAll('.emergency-tasks div');

for(i = 0; i < emergency.length; i+=1){
  emergency[i].style.backgroundColor = 'pink';
}

const emergencyHeader = document.querySelectorAll('.emergency-tasks h3');

for(i2 = 0; i2 < emergency.length; i2+=1){
  emergencyHeader[i2].style.backgroundColor = 'blue';
}

const noEmergency = document.querySelectorAll('.no-emergency-tasks div');

for(i = 0; i < emergency.length; i+=1){
  noEmergency[i].style.backgroundColor = 'yellow';
}

const noEmergencyHeader = document.querySelectorAll('.no-emergency-tasks h3');

for(i2 = 0; i2 < emergency.length; i2+=1){
  noEmergencyHeader[i2].style.backgroundColor = 'black';
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'green'