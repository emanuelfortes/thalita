function nextScreen() {
  document.getElementById("screen-1").classList.add("hidden");
  document.getElementById("screen-2").classList.remove("hidden");

  const text = `
Analisando sistema...
Erro encontrado.
Origem: você.

Abrindo abas mentais...
Nenhuma fecha.

Executando você em segundo plano...
Falha ao encerrar processo.
  `;

  let i = 0;
  const typing = document.getElementById("typing");

  const interval = setInterval(() => {
    typing.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      setTimeout(showFinal, 2500);
    }
  }, 40);
}

function showFinal() {
  document.getElementById("screen-2").classList.add("hidden");
  document.getElementById("screen-3").classList.remove("hidden");
}
