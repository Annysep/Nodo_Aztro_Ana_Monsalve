function calculateBricks() {
    const wallLength = parseFloat(document.getElementById('wallLength').value);
    const wallHeight = parseFloat(document.getElementById('wallHeight').value);

    if (isNaN(wallLength) || isNaN(wallHeight)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    // Asumiendo que el tamaño de un ladrillo estándar es de 0.2m x 0.1m
    const brickLength = 0.2;
    const brickHeight = 0.1;

    // Calcular el área del muro y el área de un ladrillo
    const wallArea = wallLength * wallHeight;
    const brickArea = brickLength * brickHeight;

    // Calcular el número total de ladrillos necesarios
    const totalBricks = wallArea / brickArea;

    // Mostrar resultado
    document.getElementById('result').innerText = `Se necesitan ${Math.ceil(totalBricks)} ladrillos`;
}
