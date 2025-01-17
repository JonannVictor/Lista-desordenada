// Selecione os elementos HTML
const entradas = document.querySelectorAll('#list li');
const saidasPaulo = document.querySelectorAll('#paulo li');
const saidasJonann = document.querySelectorAll('#jonann li');

// Função para calcular o total de entradas de Paulo
function calcularEntradasPaulo() {
  let totalEntradasPaulo = 0;
  entradas.forEach(entrada => {
    if (entrada.id === 'entradas-paulo') {
      const valor = entrada.textContent.replace('R$', '').replace('.', '').replace(',', '.');
      const numero = parseFloat(valor);
      if (!isNaN(numero)) {
        totalEntradasPaulo += numero;
      }
    }
  });
  return totalEntradasPaulo / 100;
}

// Função para calcular o total de entradas de Jonann
function calcularEntradasJonann() {
  let totalEntradasJonann = 0;
  entradas.forEach(entrada => {
    if (entrada.id === 'entradas-jonann') {
      const valor = entrada.textContent.replace('R$', '').replace('.', '').replace(',', '.');
      const numero = parseFloat(valor);
      if (!isNaN(numero)) {
        totalEntradasJonann += numero;
      }
    }
  });
  return totalEntradasJonann / 100;
}

// Função para calcular o total de saídas de Paulo
function calcularSaidasPaulo() {
  let totalSaidasPaulo = 0;
  saidasPaulo.forEach(saida => {
    if (saida.textContent.includes('R$')) {
      const valor = saida.textContent.split('=')[1].replace('R$', '').replace('.', '').replace(',', '.');
      const numero = parseFloat(valor);
      if (!isNaN(numero)) {
        totalSaidasPaulo += numero;
      }
    }
  });
  return totalSaidasPaulo / 100;
}

// Função para calcular o total de saídas de Jonann
function calcularSaidasJonann() {
  let totalSaidasJonann = 0;
  saidasJonann.forEach(saida => {
    if (saida.textContent.includes('R$')) {
      const valor = saida.textContent.split('=')[1].replace('R$', '').replace('.', '').replace(',', '.');
      const numero = parseFloat(valor);
      if (!isNaN(numero)) {
        totalSaidasJonann += numero;
      }
    }
  });
  return totalSaidasJonann / 100;
}

// Função para calcular o saldo atual de Paulo
function calcularSaldoPaulo() {
  const entradaPaulo = calcularEntradasPaulo();
  const saidasPaulo = calcularSaidasPaulo();
  return (entradaPaulo - saidasPaulo).toFixed(2);
}

// Função para calcular o saldo atual de Jonann
function calcularSaldoJonann() {
  const entradaJonann = calcularEntradasJonann();
  const saidasJonann = calcularSaidasJonann();
  return (entradaJonann - saidasJonann).toFixed(2);
}

// Exiba os resultados
document.querySelector('#paulo').innerHTML += `<p>Total de saídas de Paulo: R$${calcularSaidasPaulo().toFixed(2)}</p>`;

document.querySelector('#jonann').innerHTML += `<p>Total de saídas de Jonann: R$${calcularSaidasJonann().toFixed(2)}</p>`;

document.querySelector('#saldo-paulo').textContent = `Saldo atual de Paulo: R$${calcularSaldoPaulo()}`;
document.querySelector('#saldo-jonann').textContent = `Saldo atual de Jonann: R$${calcularSaldoJonann()}`;