function tabuada() {

var n1 = document.getElementById('num')
var num = Number(n1.value)
var tab = document.getElementById('seltab')
if(n1.value.length == 0){
    alert('[ERRO] Digite um Número')
}
else{
        tab.innerText = ""

        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option') 
            item.text =  `${num} X ${c} = ${num * c}`
            tab.value = `tab${c}`
             tab.appendChild(item)
}
}

   

}