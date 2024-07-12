function calcularLitrosPesticida(b1, b2, h) {
    const area = ((b1 + b2) * h) / 2;
    const litrosPesticida = area * 1.5;
    return litrosPesticida;
}

function calcularLongitudLado(b1, b2, h) {
    const lado = Math.sqrt(h ** 2 + ((b2 - b1) / 2) ** 2);
    return lado;
}

function calcularLongitudCerca(b1, b2, h) {
    const lado1 = calcularLongitudLado(b1, b2, h);
    const lado2 = calcularLongitudLado(b1, b2, h);
    const lado3 = b1;
    const lado4 = b2;
    const longitudTotal = lado1 + lado2 + lado3 + lado4;
    return longitudTotal;
}

function calcular() {
    const base1 = parseFloat(document.getElementById('base1').value);
    const base2 = parseFloat(document.getElementById('base2').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(base1) || isNaN(base2) || isNaN(altura)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const totalPesticida = calcularLitrosPesticida(base1, base2, altura);
    const longitudCerca = calcularLongitudCerca(base1, base2, altura);

    document.getElementById('resultPesticida').innerText = `Se necesitan ${totalPesticida.toFixed(2)} litros de pesticida.`;
    document.getElementById('resultCerca').innerText = `Se necesitan ${longitudCerca.toFixed(2)} metros de cerca eléctrica.`;
}
