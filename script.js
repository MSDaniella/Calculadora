let displayValue = ''; //armazena o valor que vai ser mostrado no visor da calculadora, por isso esta vazio.

function appendElement(elemento) { // funcao chamada quando um botao (sem ser CE, C, = e +/-) e clicado
    displayValue += elemento; // ( displayValue= displayValue + elemento )
    updateDisplay(); // atualiza o visor com o novo elemento
}

function clearEntry() { // remove o ultimo caractere do displayvalue
    displayValue = displayValue.slice(0, -1); // .slice = funcao
    updateDisplay();
}

function clearDisplay() { // redefine o displayValue para uma srting vazia
    displayValue = '';
    updateDisplay();
}

function changeSign() { //se for so um numero ele muda o sinal, se for uma operacao ele executa a operacao e depois muda o sinal
    displayValue = eval(displayValue) * -1;
    updateDisplay();
}

function updateDisplay() { //atualiza o display (visor) para o ultimo elemento selecionado
    document.getElementById('display').value = displayValue;
}

function calculateResult() { 
    try {
        let result;
        if (displayValue.includes('%')) { //verifica se tem %, se tiver vai passar pelos proximos passos.
            const parts = displayValue.split('%'); //divide em partes const num = parseFloat(parts[0]); // o primeiro elemento e o numero const percent = parseFloat(parts[1]); // o segundo elemento e a porcentagem
            if (parts.length>2) {   // so pode ter dois valores para calcular a %
            throw new Error('Multiplas Porcentagens');
            }
            result = (num * percent) / 100;
        } else {
            result = eval(displayValue);
        }
        
        // Verifica se o resultado é um número finito
        if (!isFinite(result)) {
            throw new Error('Divisão por zero');
        }

        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = error;
        updateDisplay();
    }
}

/*no calculateResult eu so tratei 2 tipos de erro: sendo eles o de multiplas porcentagens
e a divisao por zero*/