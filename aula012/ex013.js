/*Estrutura:
  switch(expressão){
    case 1:
      bloco 1
      break 
    case 2:
      bloco 2
      break
    case 3:
      bloco 3
      break
    default:
      bloco 4 
      break
}*/

/*
Semana:
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
var agora = new Date()
var sem = agora.getDay()

switch(sem){
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break 
  case 2:
    console.log('Terça')
    break
  case 3: 
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
    break
  case 6:
    console.log('Sábado')
    break
  default:
    console.log('[ERROR] Dia inválido!!')
}