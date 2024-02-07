let Nome = "Guessero"
let XP = 3000
switch(true){
    case XP < 1001:
        console.log("O Herói de nome " + Nome + " está no nível de Ferro")
        break
    case XP >= 1001 && XP <= 2000:
        console.log("O Herói de nome " + Nome + " está no nível de Bronze")
        break
    case XP >= 2001 && XP <= 5000:
        console.log("O Herói de nome " + Nome + " está no nível de Prata")
        break
    case XP >= 5001 && XP <= 7000:
        console.log("O Herói de nome " + Nome + " está no nível de Ouro")
        break
    case XP >= 7001 && XP <= 8000:
        console.log("O Herói de nome " + Nome + " está no nível de Platina")
        break
    case XP >= 8001 && XP <= 9000:
        console.log("O Herói de nome " + Nome + " está no nível de Ascendente")
        break     
    case XP >= 9001 && XP <= 10000:
        console.log("O Herói de nome " + Nome + " está no nível de Imortal")
        break   
    default:
        console.log("O Herói de nome " + Nome + " está no nível de Radiante")
        break
}