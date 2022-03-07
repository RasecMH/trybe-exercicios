// variáveis e constates
let  statusCandidato = 'lista1';

switch (statusCandidato){
  case ('aprovada'):
    console.log('Você foi aprovada');
    break;

  case ('lista'):
    console.log('Você está na lista de espera!');
    break;
  
  case ('reprovada'):
    console.log('Você foi reprovada');
    break;

  default:
    console.log('Valor não encontrada');
}