  document.getElementById('todos').addEventListener('change', function () {
    const checked = this.checked;
    const ids = ['media', 'variancia', 'desvio', 'cv'];
    ids.forEach(id => 
  {
  document.getElementById(id).checked = checked;
  });
});

function calcular() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);

  const mostrarMedia = document.getElementById('media').checked;
  const mostrarVariancia = document.getElementById('variancia').checked;
  const mostrarDesvio = document.getElementById('desvio').checked;
  const mostrarCV = document.getElementById('cv').checked;
  const mostrarTodos = document.getElementById('todos').checked;

  let resultado = "";

  if (isNaN(a) || isNaN(b) || a >= b) {
    alert("Insira valores válidos para A e B (A < B).");
    return;
  }

  if (
    !mostrarMedia && !mostrarVariancia && !mostrarDesvio && !mostrarCV && !mostrarTodos
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

  resultado += `</div>`;
  document.getElementById('resultado').innerHTML = resultado;
}
