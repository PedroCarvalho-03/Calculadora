function calcula() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let operacao = document.getElementById("operacao").value;
    let numero2 = parseFloat(document.getElementById("numero2").value);
  
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, insira números válidos.");
    } else {
      let resultado;
  
      switch (operacao) {
        case '+':
          resultado = numero1 + numero2;
          break;
        case '-':
          resultado = numero1 - numero2;
          break;
        case '*':
          resultado = numero1 * numero2;
          break;
        case '/':
          if (numero2 === 0) {
            alert("Erro: Divisão por zero não é permitida.");
            return;
          }
          resultado = numero1 / numero2;
          break;
        case '%':
          resultado = numero1 % numero2;
          break;
        case '**':
          resultado = Math.pow(numero1, numero2);
          break;
        default:
          alert("Operação inválida! Use +, -, *, /, % ou **.");
          return;
      }
  
      alert(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);
    }
  }
  