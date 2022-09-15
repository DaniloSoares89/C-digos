var num = document.querySelector('input#num')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
var valores = []



function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100)
    {
        return true
    }
    else{
        return false
    }
    
    
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }

}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Numero ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =""
    }
    else{
        alert('coloque os numeros na caixa de texto')
    }
    num.value = ''
    num.focus()

}
function finalizar(){
    if(valores.length == 0){
        alert('adicione valores')
    }
    else{
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(var pos in valores){
            soma +=valores[pos]
            media = soma/tot
            if(valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML =""
        res.innerHTML += `<p>o total de valores são ${tot}</p>`
        res.innerHTML += `<p> O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor Número é ${menor}</p>`
        res.innerHTML += ` <p>a soma dos valores é ${soma}</p>`
        res.innerHTML +=` <p> A media dos valores é ${media}</p>`
    }
    

}