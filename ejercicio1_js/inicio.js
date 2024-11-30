document.getElementById("formNotas").addEventListener("submit", function(event) {

function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function calcularNotaFinal(media) {
    let notaFinal = media >= 7 ? "Aprovado" : "Reprovado";
    return notaFinal;
}