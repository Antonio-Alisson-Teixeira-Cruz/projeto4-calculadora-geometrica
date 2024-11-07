function triangle(base, high){
    return (base*high)/2
}

function rectangle(base, high){
    return base*high
}

function square(side){
    return side*side
}

function trapezium(biggerBase, smallerBase, high){
    return (biggerBase+smallerBase)*high/2
}

function circle(radius){
    return 3,14*(radius*radius)
}

let menu

do{
    menu = prompt(`Escolha qual forma geométrica você quer calcular:
    1 - Triângulo
    2 - Retângulo
    3 - Quadrado
    4 - Trapézio
    5 - Círculo
    6 - Sair`)

    switch(menu){
        case '1':
            let baseT = prompt('Qual o tamanho da base triângulo?')
            let highT = prompt('Qual tamanho da altura do triângulo?')
            alert('A área do triângulo é ' + triangle(baseT, highT))
            break

        case '2':
            let baseR = prompt('Qual o tamanho da base do retângulo?')
            let highR = prompt('Qual o tamanho da altura do retângulo?')
            alert('A área do retângulo é ' + rectangle(baseR, highR))
            break

        case '3':
            let sideS = prompt('Qual o tamanho do lado do quadrado?')
            alert('A área do quadrado é ' + square(sideS))
            break

        case '4':
            let biggerBaseTrape = prompt('Qual o tamanho da base maior do trapézio?')
            let smallerBaseTrape = prompt('Qual o tamanaho da base menor do trapézio?')
            let highTrape = prompt('Qual o tamanho da altura do trapézio?')
            alert('A área do trapézio é ' + trapezium(biggerBaseTrape, smallerBaseTrape, highTrape))
            break

        case '5':
            let radiusC = prompt('Qual o tamanho do raio do círculo?')
            alert('A área do círculo é ' + circle(radiusC))
            break

        case '6':
            alert('Saindo...')
            break

        default:
            alert('Opção inválida')
        }
}while(menu!== '6')
