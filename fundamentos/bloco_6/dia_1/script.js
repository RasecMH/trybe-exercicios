const submitBtn = document.getElementById('submitBtn');
const namePerson = document.getElementById('name');
const email = document.getElementById('email');
const textArea = document.getElementById('textarea');
const agree = document.getElementById('agree');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameLength = namePerson.value.length;
  const emailLength = email.value.length;
  const textLength = textArea.value.length;
  if(nameLength < 10 || emailLength < 10 || textLength === 0 || agree.checked === false){
    alert('dados invalidos')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
  }
});
