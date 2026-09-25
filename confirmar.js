alert("JavaScript funcionando!");

const convite = document.getElementById("convite");
const agendamento = document.getElementById("agendamento");
const resultado = document.getElementById("resultado");

const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const botaoConfirmar = document.getElementById("confirmar");

const data = document.getElementById("data");
const horario = document.getElementById("horario");

const mensagem = document.getElementById("mensagem");


agendamento.style.display = "none";
resultado.style.display = "none";


botaoSim.addEventListener("click", function() {

    convite.style.display = "none";

    agendamento.style.display = "block";

});


botaoNao.addEventListener("click", function() {

    convite.innerHTML = "<h1>🥺 Tudo bem...</h1><p>Talvez outra hora!</p>";

});


botaoConfirmar.addEventListener("click", function() {

    if (data.value === "" || horario.value === "") {

        alert("Escolha uma data e um horário!");

        return;

    }

    agendamento.style.display = "none";

    resultado.style.display = "block";

    mensagem.textContent =
        "Nos encontramos no dia " +
        data.value +
        " às " +
        horario.value +
        " ❤️";

});
