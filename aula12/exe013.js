var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('Quarta')
    break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('sábado')
        break
    default:
        console.log('[ERRO]Dia da semana Inválido')
        break

}