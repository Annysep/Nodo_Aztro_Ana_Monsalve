function calcularLiquidacion() {
    // Obtener valores del formulario
    let diasTrabajados = parseFloat(document.getElementById("diasTrabajados").value);
    let horasExtrasDiurnas = parseFloat(document.getElementById("horasExtrasDiurnas").value);
    let horasExtrasNocturnas = parseFloat(document.getElementById("horasExtrasNocturnas").value);
    let horasExtrasFestivos = parseFloat(document.getElementById("horasExtrasFestivos").value);

    // Validar que los campos no estén vacíos
    if (isNaN(diasTrabajados) || isNaN(horasExtrasDiurnas) || isNaN(horasExtrasNocturnas) || isNaN(horasExtrasFestivos)) {
        alert("Por favor ingrese valores numéricos válidos en todos los campos.");
        return;
    }

    // Calcular resultados
    let resultados = liquidarEmpleado(diasTrabajados, horasExtrasDiurnas, horasExtrasNocturnas, horasExtrasFestivos);

    // Mostrar resultados en la tabla
    document.getElementById("salarioBase").textContent = resultados.salarioBase.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("valorHorasExtrasDiurnas").textContent = resultados.valorHorasExtrasDiurnas.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("valorHorasExtrasNocturnas").textContent = resultados.valorHorasExtrasNocturnas.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("valorHorasExtrasFestivos").textContent = resultados.valorHorasExtrasFestivos.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("totalDevengado").textContent = resultados.totalDevengado.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("totalDescuentoSalud").textContent = resultados.totalDescuentoSalud.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("totalDescuentoPension").textContent = resultados.totalDescuentoPension.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("totalDeducibleAlimentacion").textContent = resultados.totalDeducibleAlimentacion.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("totalDeducciones").textContent = resultados.totalDeducciones.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("salarioNeto").textContent = resultados.salarioNeto.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    // Mostrar la sección de resultados
    document.getElementById("resultados").style.display = "block";
}

function liquidarEmpleado(diasTrabajados, horasExtrasDiurnas, horasExtrasNocturnas, horasExtrasFestivos) {
    // Constantes
    const valorDiaTrabajado = 43000;
    const valorHoraExtraDiurna = 6915;
    const valorHoraExtraNocturna = 9681;
    const valorHoraExtraFestivos = 11064;
    const descuentoSalud = 0.04;
    const descuentoPension = 0.04;
    const deducibleAlimentacion = 0.03;

    // Cálculo de los valores
    let salarioBase = diasTrabajados * valorDiaTrabajado;
    let valorHorasExtrasDiurnas = horasExtrasDiurnas * valorHoraExtraDiurna;
    let valorHorasExtrasNocturnas = horasExtrasNocturnas * valorHoraExtraNocturna;
    let valorHorasExtrasFestivos = horasExtrasFestivos * valorHoraExtraFestivos;

    // Total devengado
    let totalDevengado = salarioBase + valorHorasExtrasDiurnas + valorHorasExtrasNocturnas + valorHorasExtrasFestivos;

    // Deducciones
    let totalDescuentoSalud = totalDevengado * descuentoSalud;
    let totalDescuentoPension = totalDevengado * descuentoPension;
    let totalDeducibleAlimentacion = totalDevengado * deducibleAlimentacion;

    // Total deducciones
    let totalDeducciones = totalDescuentoSalud + totalDescuentoPension + totalDeducibleAlimentacion;

    // Salario neto
    let salarioNeto = totalDevengado - totalDeducciones;

    // Retornar resultados
    return {
        salarioBase: salarioBase,
        valorHorasExtrasDiurnas: valorHorasExtrasDiurnas,
        valorHorasExtrasNocturnas: valorHorasExtrasNocturnas,
        valorHorasExtrasFestivos: valorHorasExtrasFestivos,
        totalDevengado: totalDevengado,
        totalDescuentoSalud: totalDescuentoSalud,
        totalDescuentoPension: totalDescuentoPension,
        totalDeducibleAlimentacion: totalDeducibleAlimentacion,
        totalDeducciones: totalDeducciones,
        salarioNeto: salarioNeto
    };
}
