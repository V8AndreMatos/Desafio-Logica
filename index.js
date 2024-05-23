let superHeroName = "Iron Man"
let XP = 7900
let nivel = "Platina"

if(XP < 1000){
    console.log("Ferro" )
}
if(XP === 1000 && XP <= 2000){
    console.log("Bronze" )
}
if(XP === 2001 && XP <= 5000){
    console.log("Prata")
}
if(XP === 5001 && XP <= 7000){
    console.log("Ouro")
}
if(XP === 7001 && XP <= 8000){
    console.log("Platina")
}
if(XP === 8001 && XP <= 9000){
    console.log("Prata")
}
if(XP === 9001 && XP <= 10000){
    console.log("Imortal")
}
if(XP >=10001){
    console.log("Radiante")
}
console.log("O super heroi " +superHeroName+ " está no nivel de : " +nivel+ " e ele tem " +XP+ " pontos")
