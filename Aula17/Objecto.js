let amigo ={nome:"josé",idade:33,sexo:"Masculino",peso:82.2,engordar(p){
    console.log('Engordou')
   this. peso+=p
}}
amigo.engordar(1)

console.log(`o ${amigo.nome} pesa ${amigo.peso} Kg`)