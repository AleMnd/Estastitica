document.getElementById('todos').addEventListener('change', function () {
    const checked = this.checked;
    const ids = ['media', 'variancia', 'desvio', 'cv'];
    ids.forEach(id => 
  {
  document.getElementById(id).checked = checked;
  });
});

document.getElementById('entre').addEventListener('change', function () {
  const inputsEntre = document.getElementById('inputs-entre');
  inputsEntre.style.display = this.checked ? 'block' : 'none';
});

function calcular() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const x1 = parseFloat(document.getElementById('x1').value);
  const x2 = parseFloat(document.getElementById('x2').value);

  const mostrarMedia = document.getElementById('media').checked;
  const mostrarVariancia = document.getElementById('variancia').checked;
  const mostrarDesvio = document.getElementById('desvio').checked;
  const mostrarCV = document.getElementById('cv').checked;
  const mostrarTodos = document.getElementById('todos').checked;
  const mostrarEntre = document.getElementById('entre').checked;

  let resultado = "";

  if (isNaN(a) || isNaN(b) || a >= b) {
    alert("Insira valores válidos para A e B (A < B).");
    return;
  }

  if (
    !mostrarMedia && !mostrarVariancia && !mostrarDesvio && !mostrarCV && !mostrarTodos && !mostrarEntre
  ) {
    alert("Selecione pelo menos uma opção para calcular.");
    return;
  }

  const media = (a + b) / 2;
  const variancia = Math.pow(b - a, 2) / 12;
  const desvio = Math.sqrt(variancia);
  const cv = ((100 * desvio) / media); 

  resultado = `<div class="aparecer">`;

  if (mostrarMedia || mostrarTodos) {
    resultado += `<p>Média (μ): ${media.toFixed(2)}</p>`;
  }
  if (mostrarVariancia || mostrarTodos) {
    resultado += `<p>Variância (σ²): ${variancia.toFixed(2)}</p>`;
  }
  if (mostrarDesvio || mostrarTodos) {
    resultado += `<p>Desvio Padrão (σ): ${desvio.toFixed(2)}</p>`;
  }
  if (mostrarCV || mostrarTodos) {
    resultado += `<p>Coeficiente de Variação: ${cv.toFixed(2)}%</p>`;
  }

  if (mostrarEntre) {
    if (isNaN(x1) || isNaN(x2) || x1 < a || x2 > b || x1 >= x2) {
      alert("Insira valores válidos para X1 e X2 (A ≤ X1 < X2 ≤ B)");
      return;
    }
  const probEntre = ((x2 - x1) / (b - a)) * 100;
  resultado += `<p>Probabilidade entre X1 e X2: ${probEntre.toFixed(2)}%</p>`;
}
  resultado += `</div>`;
  document.getElementById('resultado').innerHTML = resultado;
}
