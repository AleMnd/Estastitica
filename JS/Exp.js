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
        tudo = parseFloat(document.getElementById('tudo').value);
        n = parseFloat(document.getElementById('n').value);
        let resultado = "";
      if (isNaN(a)|| isNaN (tudo) || isNaN (n)) {
      alert("Insira os valores");
      } else {
        media = (tudo / n);
        lambda = (1 / media);
        probabilidade = arredondar2(Math.exp(-lambda * a) * 100);

        resultado = `
        <div class="aparecer">
            <h2>Resultado:</h2>
            <p>Média (μ): ${media.toFixed(2)}</p>
            <p>Lambda (λ): ${lambda.toFixed(2)}</p>
            <p>Probabilidade de X > a: ${probabilidade}%</p>
        </div>
    `;
  document.getElementById('resultado').innerHTML = resultado;
      }
}

   function menor(){
    a = parseFloat(document.getElementById('a').value);
    tudo = parseFloat(document.getElementById('tudo').value);
    n = parseFloat(document.getElementById('n').value);
    let resultado = "";
    
    if (isNaN(a)|| isNaN (tudo) || isNaN (n)) {
      alert("Insira os valores");
      } else{
    media =(tudo / n);
    lambda = (1 / media);
    probabilidade =arredondar2((1 - Math.exp(-lambda * a)) * 100);

    resultado = `
    <div class="aparecer">
        <h2>Resultado:</h2>
        <p>Média (μ): ${media.toFixed(2)}</p>
        <p>Lambda (λ): ${lambda.toFixed(2)}</p>
        <p>Probabilidade de X > a: ${probabilidade}%</p>
    </div>
    `;

    document.getElementById('resultado').innerHTML = resultado;
    }
  }

 function entre() {
  const freq = parseFloat(document.getElementById("freq").value);
  const total = parseFloat(document.getElementById("total").value);
  const entreA = parseFloat(document.getElementById("entreA").value);
  const entreB = parseFloat(document.getElementById("entreB").value);
  let resultado2 = "";

   if (isNaN(entreA)|| isNaN(entreB) || isNaN (total) || isNaN (freq)) {
      alert("Insira os valores");}
    else if(entreA >= entreB){
        alert('O Valor A não pode ser menor ou igual ao Valor B!!')}
      else {
        const media = total / freq;
        const lambda = 1 / media;
        const Pma = Math.exp(-lambda * entreA);
        const Pmb = Math.exp(-lambda * entreB);
        const prob = arredondar2((Pma - Pmb) * 100);

        resultado2 = `
        <div class="aparecer">
          <h2>Resultado:</h2>
          <p>Média (μ): ${media.toFixed(2)}</p>
          <p>Lambda (λ): ${lambda.toFixed(2)}</p>
          <p>Valor P(x > a): ${(Pma*100).toFixed(2)}%</p>
          <p>Valor P(x > b): ${(Pmb*100).toFixed(2)}%</p>
          <p>Probabilidade entre ${entreA} e ${entreB}: ${prob}%</p>
        </div>
        `;
   console.log(prob);

  document.getElementById("resultado2").innerHTML = resultado2;
      }
}
