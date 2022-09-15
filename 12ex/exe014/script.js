function carregar(){
var msg = window.document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora =  data.getHours()
msg.innerText = `Agora são ${hora} Horas`






if(hora >=0 && hora < 12){
    //Bom Dia!
    img.src = 'fotoManha.jpg'
    msg.innerText+= ' Bom Dia!'
    document.body.style.background = '#e2cd9f'
}
else if(hora >=12 && hora <= 18 ){
    //Boa Tarde!
    img.src = 'fotoTarde.jpg'
    msg.innerText += ' Boa Tarde!'
    document.body.style.background = '#b9846f'
    

    

}
else{
    //Boa Noite!
    img.src = 'fotoNoite.jpg'
    msg.innerText += ' Boa Noite!'
    document.body.style.background = '#515154'
}
}