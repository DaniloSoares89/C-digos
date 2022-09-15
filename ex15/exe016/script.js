function contagem(){
    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('num2')
    var pass = window.document.getElementById('passo')
    var res = document.getElementById('res')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var passo = Number(pass.value)

    
    
    if(n1.value.length == 0 || n2.value.length == 0 || pass.value.length == 0 ){
         alert("[ERRO]  faltando dados")
         res.innerHTML = 'Impossível Contar'
        


    }
      
    else {
        res.innerHTML= 'Contando</br>'
        if(passo <= 0)
        {
            alert("Passo inválido! Considerando passo 1")
            passo = 1
        }
        if( num1 < num2){
            //contagem crescente
            for(var c = num1; c <= num2; c +=passo){
        
                res.innerHTML+=` ${c} \u{1F449}`

        }
    }
         else{
            //contagem regressiva

            for(var c = num1; c >= num2; c-=passo ){
                 res.innerHTML+=` ${c} \u{1f449}`
            }
         }
            
         res.innerHTML += `\u{1f3c1}`
        }
        

    
}