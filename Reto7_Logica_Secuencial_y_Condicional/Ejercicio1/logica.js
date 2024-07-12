document.getElementById("tiemposForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const tiempo1 = parseFloat(document.getElementById("tiempo1").value);
    const tiempo2 = parseFloat(document.getElementById("tiempo2").value);
    const tiempo3 = parseFloat(document.getElementById("tiempo3").value);
    const tiempo4 = parseFloat(document.getElementById("tiempo4").value);
    const tiempo5 = parseFloat(document.getElementById("tiempo5").value);

    const tiempoTotal = tiempo1 + tiempo2 + tiempo3 + tiempo4 + tiempo5;
    const promedioTiempo = tiempoTotal / 5;

    alert(`El promedio de tiempo del nadador es de ${promedioTiempo.toFixed(2)} segundos por prueba.`);
});
