  function arredondar2(valor) {
    return Math.round(valor * 100) / 100;
  }

  function calcular() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const x1 = parseFloat(document.getElementById('x1').value);
    const x2 = parseFloat(document.getElementById('x2').value);

    let resultado = "";

    if (isNaN(a) || isNaN(b) || a >= b) {
      alert("Insira valores válidos para a e b (a < b).");
    } else if (x1 < a || x2 > b || x1 >= x2) {
      alert("x1 e x2 devem estar entre a e b, com x1 < x2.");
    } else {
      const media = (a + b) / 2;
      const variancia = Math.pow(b - a, 2) / 12;
      const desvio = Math.sqrt(variancia);
      const prob = ((x2 - x1) / (b - a)) * 100;
      const cv = ((100 * desvio)/ media);

      resultado = `
        <div class="aparecer">
          <p>Média (μ): ${media.toFixed(2)}</p>
          <p>Variância (σ²): ${variancia.toFixed(2)}</p>
          <p>Desvio Padrão (σ): ${desvio.toFixed(2)}</p>
          <p>Coeficiente de variação (σ): ${cv.toFixed(2)}%</p>
          <p>Probabilidade: ${prob.toFixed(2)}%</p>
        </div>
      `;
    }

    document.getElementById('resultado').innerHTML = resultado;
  }