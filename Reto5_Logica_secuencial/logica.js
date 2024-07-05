
// Calculadora rectángulo
function calcularRectangulo() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, ingresa valores válidos para base y altura.");
        return;
    }

    const area = base * altura;
    const perimetro = 2 * (base + altura);
    const diagonal = Math.sqrt(base * base + altura * altura);

    document.getElementById('areaRectangulo').value = area.toFixed(2);
    document.getElementById('perimetroRectangulo').value = perimetro.toFixed(2);
    document.getElementById('diagonalRectangulo').value = diagonal.toFixed(2);
}

// Calcular círculo
function calcularCirculo() {
    const diametro = parseFloat(document.getElementById('diametro').value);

    if (isNaN(diametro)) {
        alert("Por favor, ingresa un valor válido para el diámetro.");
        return;
    }

    const radio = diametro / 2;
    const area = Math.PI * radio * radio;
    const perimetro = 2 * Math.PI * radio;

    document.getElementById('areaCirculo').value = area.toFixed(2);
    document.getElementById('perimetroCirculo').value = perimetro.toFixed(2);
}




