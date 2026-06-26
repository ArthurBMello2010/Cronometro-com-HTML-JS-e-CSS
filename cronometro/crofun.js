let segundos = 0;
let intervalo = null;

function atualizarDisplay() {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;

    document.getElementById("display").textContent =
        String(horas).padStart(2, "0") + ":" +
        String(minutos).padStart(2, "0") + ":" +
        String(segs).padStart(2, "0");
}

function contar() {
    segundos++;
    atualizarDisplay();
}

function iniciar() {
    if (intervalo === null) {
        intervalo = setInterval(contar, 1000);
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function zerar() {
    pausar();
    segundos = 0;
    atualizarDisplay();
}