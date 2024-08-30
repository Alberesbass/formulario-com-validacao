// VERIFICAÇÃO DE PREENCHIMENTO OBRIGATÓRIO VIA MUDANÇA NO ESTADO DO INPUT
const listaDeInputs = document.querySelectorAll(".input-text");
const ativarOpacidade = document.querySelectorAll(".alerta");
const acionarErro = document.getElementById("btn-enviar");

listaDeInputs.forEach((input, span) => {
  input.addEventListener("change", () => {
    if (input.value !== "") {
      input.classList.add("campo-preenchido");
      input.classList.remove("erro-acionado");
      if (ativarOpacidade[span]) {
        ativarOpacidade[span].classList.remove("mensagem-de-erro");
      }
    } else {
      input.classList.remove("campo-preenchido");
      input.classList.add("erro-acionado");
      if (ativarOpacidade[span]) {
        ativarOpacidade[span].classList.add("mensagem-de-erro");
      }
    }
  });
});

// VERIFICAÇÃO DE PREENCHIMENTO OBRIGATÓRIO VIA CLICK NO BOTÃO
acionarErro.addEventListener("click", campoObrigatorio);

function campoObrigatorio() {
  listaDeInputs.forEach((input, span) => {
    if (input.value === "") {
      input.classList.remove("campo-preenchido");
      input.classList.add("erro-acionado");
      if (ativarOpacidade[span]) {
        ativarOpacidade[span].classList.add("mensagem-de-erro");
      }
    } else {
      input.classList.add("campo-preenchido");
      input.classList.remove("erro-acionado");
      if (ativarOpacidade[span]) {
        ativarOpacidade[span].classList.remove("mensagem-de-erro");
      }
    }
  });
}
