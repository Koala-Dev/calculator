function operador(x) {
    let operacao = document.getElementById('operador')
    let histOper = document.getElementById('histOper')
    if(valor1!==''){
        switch(x){
            case "+":
                operacao.value = "+"
                histOper.innerHTML= ' + '
                operacao.style.display="block"
                break;
            case "-":
                operacao.style.display="block"
                operacao.value = "-"
                histOper.innerHTML= ' - '
                break;
            case "*":
                operacao.value = "*"
                histOper.innerHTML= ' * '
                operacao.style.display="block"
                break;
            case "/":
                operacao.style.display="block"
                operacao.value = "/"
                histOper.innerHTML= ' / '
                break; 
            case "x2":
                operacao.style.display="block"
                operacao.value = "^"
                histOper.innerHTML= ' ^ '
            default:    
        }   
    }    
}   
function number(x){
    let valor1 = document.getElementById('valor1')
    let tamanhoValor1 = 0
    let valor2 = document.getElementById('valor2')
    let tamanhoValor2 = 0
    let histValue1 = document.getElementById('histValue1')
    let histValue2 = document.getElementById('histValue2')
    let operacao = document.getElementById('operador')
    let resultado = document.getElementById('resultado1')
    let resultadohmtl = document.getElementById('resultado2')
        if(operacao.value===''){
            resultadohmtl.style.display="none"
            resultado.style.display="none"
            valor1.style.display="block"
            valor1.value+=x
            histValue1.innerHTML+=x
             tamanhoValor1 = valor1.value.length*25
            valor1.style.width=`${tamanhoValor1}px`
        }else{
            valor2.style.display="block"
            valor2.value+=x
            histValue2.innerHTML+=x
            tamanhoValor2 = valor2.value.length*25
            valor2.style.width=`${tamanhoValor2}px`
        }
        
}

    let historicogeral = []

 function resultado(){
    let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    let operacao = document.getElementById('operador')
    let histValue1 = document.getElementById('histValue1')
    let histValue2 = document.getElementById('histValue2')
    let histOper = document.getElementById('histOper')
    let resultadohmtl = document.getElementById('resultado2')
    let resultado = document.getElementById('resultado1')
    let resposta = 0
        switch(operacao.value){
            case "+":
                resposta = Number(valor1.value)+Number(valor2.value)
                resultadohmtl.innerHTML = `${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`
                historicogeral.push(`${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`)
                resultadohmtl.style.display="block"
                resultado.value = `= ${resposta}`
                resultado.style.display = "block"
                histValue1.innerHTML =''
                histValue2.innerHTML =''
                histOper.innerHTML =''
                valor1.value = ''
                valor2.value = ''
                operacao.value = ''
                valor1.style.display = "none"
                valor2.style.display = "none"
                operacao.style.display = "none"
                break;
            case "-":
                 resposta = Number(valor1.value)-Number(valor2.value)
                resultadohmtl.innerHTML = `${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`
                historicogeral.push(`${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`)
                resultadohmtl.style.display="block"
                resultado.value = `= ${resposta}`
                resultado.style.display = "block"
                histValue1.innerHTML =''
                histValue2.innerHTML =''
                histOper.innerHTML =''
                valor1.value = ''
                valor2.value = ''
                operacao.value = ''
                valor1.style.display = "none"
                valor2.style.display = "none"
                operacao.style.display = "none"
                break;
            case "*":
                 resposta = Number(valor1.value)*Number(valor2.value)
                resultadohmtl.innerHTML = `${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`
                historicogeral.push(`${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`)
                resultadohmtl.style.display="block"
                resultado.value = `= ${resposta}`
                resultado.style.display = "block"
                histValue1.innerHTML =''
                histValue2.innerHTML =''
                histOper.innerHTML =''
                valor1.value = ''
                valor2.value = ''
                operacao.value = ''
                valor1.style.display = "none"
                valor2.style.display = "none"
                operacao.style.display = "none"
                break;
            case "/":
                 resposta = Number(valor1.value)/Number(valor2.value)
                resultadohmtl.innerHTML = `${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`
                historicogeral.push(`${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`)
                resultadohmtl.style.display="block"
                resultado.value = `= ${resposta}`
                resultado.style.display = "block"
                histValue1.innerHTML =''
                histValue2.innerHTML =''
                histOper.innerHTML =''
                valor1.value = ''
                valor2.value = ''
                operacao.value = ''
                valor1.style.display = "none"
                valor2.style.display = "none"
                operacao.style.display = "none"
                break; 
            case "^":
                 resposta = Math.pow(Number(valor1.value),Number(valor2.value))
                resultadohmtl.innerHTML = `${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`
                historicogeral.push(`${valor1.value} ${operacao.value} ${valor2.value} = ${resposta}`)
                resultadohmtl.style.display="block"
                resultado.value = `= ${resposta}`
                resultado.style.display = "block"
                histValue1.innerHTML =''
                histValue2.innerHTML =''
                histOper.innerHTML =''
                valor1.value = ''
                valor2.value = ''
                operacao.value = ''
                valor1.style.display = "none"
                valor2.style.display = "none"
                operacao.style.display = "none"
            default:
        }
}



function historicoGeral(){
    let tamanhoArray = historicogeral.length
    let alertar = ''
        for(let i=0;i<tamanhoArray;i++){
                    alertar += ` ${i+1}° : ${historicogeral[i]} 
    `
                }
        alert(alertar)

}



