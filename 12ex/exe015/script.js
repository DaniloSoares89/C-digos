function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')


if(fano.value.length == 0 || fano.value > ano ){
    window.alert('[ERRO]Verifique os dados  e tente novamente')
}

else{
    fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = "Homem" 
         if (idade >= 0 && idade < 10) {
            //criança
             img.setAttribute('src', 'menino.jpg')
        
     }
             else if(idade < 21) {
             img.setAttribute('src', 'jovemM.jpg')

            //adoloscent
     }
            else if(idade < 50) {
            //adulto
             img.setAttribute('src' , 'homem.jpg')
    }
             else {
                img.setAttribute('src' , 'idoso.jpg')
             //idoso
    }
}
   
        else if(fsex[1].checked) {
        genero = "Mulher"
            if(idade >= 0 && idade < 10){
            //criança
                 img.setAttribute('src' , 'menina.png')
        }
            else if(idade  < 21){
            //adolescent 
                 img.setAttribute('src' , 'jovem.jpg')
        }
             else if(idade < 50){
            //Adulto
                 img.setAttribute('src' , 'mulher.jpg')
        }
             else {
            //idosa
                img.setAttribute('src', 'idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerText = `detectamos um ${genero} de ${idade} de idade`
    img.style.width = '250px'
    img.style.margin = '0px'

    res.appendChild(img)
    
}
}