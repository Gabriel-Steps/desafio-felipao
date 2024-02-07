let Nome = "Guessero"
let XP = 6000
let valores_min = [1001,2001,5001,7001,8001,9001]
let valores_max = [2000,5000,7000,8000,9000,10000]
let ranks = ["Bronze","Prata","Ouro","Platina","Ascendente","Imortal"]
for(let i = 0;i<ranks.length;i++){
    if(XP < valores_min[0]){
        console.log("O Herói de nome " + Nome + " está no nível de Ferro")
        break
    }else if(XP >= valores_min[i] && XP <= valores_max[i]){
        console.log("O Herói de nome " + Nome + " está no nível de " + ranks[i])
        break
    }else if(XP > valores_max[5]){
        console.log("O Herói de nome " + Nome + " está no nível de Radiante")
        break
    }
}
