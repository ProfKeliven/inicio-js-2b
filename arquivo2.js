let fac

console.log(fatorialNumeros(4))

function somarNumeros(){
    let a=3,b=4,soma
    soma=a+b
    console.log(soma)
}


let nome = "A subtração entre "
function subtrairNumeros(a, b){
    subtracao = a-b
    //console.log(nome ,a ," menos ", b, " é igual a: "+  subtracao) 
    return(subtracao) 
}

function fatorialNumeros(a){

    if (a > 0){
        return a * fatorialNumeros(a-1)
    }
    else{
        return 1
    }
    
}