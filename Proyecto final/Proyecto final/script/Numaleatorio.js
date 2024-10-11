function getRandom() {
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    
    if (isNaN(start) || isNaN(end) || start > end) {
        document.getElementById('number').innerHTML = 'Por favor, ingresa un rango válido.';
        return;
    }

    document.getElementById('number').innerHTML = 'El número aleatorio es: ' + getRandomBetween(parseInt(start), parseInt(end));
}

function getRandomBetween(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
