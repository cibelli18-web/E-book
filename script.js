// ============================
// CONTADOR DE OFERTA
// ============================

// Define o tempo da oferta.
// Neste exemplo: 2 dias a partir do momento em que a página é aberta.

let tempoFinal = localStorage.getItem("tempoOferta");

if (!tempoFinal) {

    tempoFinal = Date.now() + (2 * 24 * 60 * 60 * 1000);

    localStorage.setItem("tempoOferta", tempoFinal);
}


function atualizarContador() {

    const agora = Date.now();

    const diferenca = tempoFinal - agora;

    if (diferenca <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");
}


atualizarContador();

setInterval(atualizarContador, 1000);


// ============================
// BOTÕES DE COMPRA
// ============================

const botoesCompra = document.querySelectorAll(
    ".buy-button, .cta-button"
);

botoesCompra.forEach(botao => {

    botao.addEventListener("click", function () {

        // IMPORTANTE:
        // Depois troque o href="#" do HTML
        // pelo seu link de checkout da Kiwify.

        console.log("Cliente clicou no botão de compra!");

    });

});