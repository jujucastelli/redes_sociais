const url= "";

async function visualizarinformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  console.log(dados);
}

visualizarinformacoesGlobais();
