  function arredondar2(valor) {
    return Math.round(valor * 100) / 100;
  }

  let lambda;
  let media;
  let a;
  let tudo;
  let n;
  let probabilidade;
  
    function maior() {
        a = parseFloat(document.getElementById('a').value);
        n = parseFloat(document.getElementById('n').value);
        let resultado = "";
      if (isNaN(a)||isNaN (n)) {
      alert("Insira os valores");
      } else {
        lambda = (1 / n);
        probabilidade = arredondar2(Math.exp(-lambda * a) * 100);

        resultado = `
        <div class="aparecer">
            <h2>Resultado:</h2>
            <p>Probabilidade de X > a:</p>
            <p>${probabilidade}%</p>
        </div>
    `;
  document.getElementById('resultado').innerHTML = resultado;
      }
}

   function menor(){
    a = parseFloat(document.getElementById('a').value);
    n = parseFloat(document.getElementById('n').value);
    let resultado = "";
    
    if (isNaN(a)|| isNaN (n)) {
      alert("Insira os valores");
      } else{
    lambda = (1 / n);
    probabilidade =arredondar2((1 - Math.exp(-lambda * a)) * 100);

    resultado = `
    <div class="aparecer">
        <h2>Resultado:</h2>
        <p>Probabilidade de X < a:</p>
        <p>${probabilidade}%</p>
    </div>
    `;

    document.getElementById('resultado').innerHTML = resultado;
    }
  }

 function entre() {
  const total = parseFloat(document.getElementById("total").value);
  const entreA = parseFloat(document.getElementById("entreA").value);
  const entreB = parseFloat(document.getElementById("entreB").value);
  let resultado2 = "";

   if (isNaN(entreA)|| isNaN(entreB) || isNaN (total)) {
      alert("Insira os valores");}
    else if(entreA >= entreB){
        alert('O Valor A não pode ser menor ou igual ao Valor B!!')}
      else {
        const lambda = 1 / total;
        const Pma = Math.exp(-lambda * entreA);
        const Pmb = Math.exp(-lambda * entreB);
        const prob = arredondar2((Pma - Pmb) * 100);

        resultado2 = `
        <div class="aparecer">
          <h2>Resultado:</h2>
          <p>Probabilidade entre ${entreA} e ${entreB}:</p>
          <p>${prob}%</p>
        </div>
        `;
   console.log(prob);

  document.getElementById("resultado2").innerHTML = resultado2;
      }
}
