let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}


function adicionar(){
    if(Number(num.value) =="" || Number(num.value) ==0 || inLista(num.value,valores))
    {
        alert("adicione valores")
    
    }
    else{
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor adicionado ${num.value}`
        lista.appendChild(item)

      
    }
    num.value = ''
    num.focus()

    

}
function finalizar(){
    if(valores.length == 0){
        alert(`Adicione valores`)
    }
    else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    
    
    for( var pos in valores){
        soma+=valores[pos]
        media = soma/tot
        
        
        
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
        

    }
    media = soma/tot

    
    
    
    res.innerHTML = ''
    res.innerHTML += `<p>o total de elementos são ${tot}</p>`
    res.innerHTML+= `<p> o maior Número é ${maior}</p>`
    res.innerHTML+=`<p>O menor valor é ${menor}</p>`
    res.innerHTML+=`<p> a soma dos valores da ${soma}</p>`
    res.innerHTML+=`<p> a média é ${media}</p>`








}


}