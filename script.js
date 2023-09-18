

//modo oscuro
function cambiarModo() {
    var cuerpo = document.body;
    cuerpo.classList.toggle("oscuro");
}


//validacion de cedula
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const cedulaInput = document.getElementById('cedula');
    const resultado = document.getElementById('resultado');

    formulario.addEventListener('click', function (e) {
        e.preventDefault();
        const cedula = cedulaInput.value.trim();
        if (validarCedulaEcuatoriana(cedula)) {
            resultado.textContent = '✅Cédula válida.';
        } else {
            resultado.textContent = '⚠️Cédula inválida. Por favor, ingrese una cédula válida.';
        }
    });

    function validarCedulaEcuatoriana(cedula) {
        // La cédula ecuatoriana tiene 10 dígitos
        if (cedula.length !== 10) {
            return false;
        }

        // Verificar que todos los caracteres son dígitos numéricos
        if (!/^\d+$/.test(cedula)) {
            return false;
        }

        // Validar el último dígito usando el algoritmo de verificación
        const ultimoDigito = Number(cedula[9]);
        const sumaPares = Number(cedula[1]) + Number(cedula[3]) + Number(cedula[5]) + Number(cedula[7]);
        let sumaImpares = 0;

        for (let i = 0; i < 9; i += 2) {
            const digito = Number(cedula[i]) * 2;
            sumaImpares += digito > 9 ? digito - 9 : digito;
        }

        const total = sumaPares + sumaImpares;
        const residuo = total % 10;
        const digitoVerificador = residuo === 0 ? 0 : 10 - residuo;

        return digitoVerificador === ultimoDigito;
    }
});


