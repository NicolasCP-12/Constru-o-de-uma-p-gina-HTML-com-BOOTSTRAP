var valores = "";

function addVal(i) {
    valores += i;
    document.getElementById("resultados").value = valores;
}

function addOperation(x) {
    if (x === "C") {
        valores = "";
        document.getElementById("resultados").value = valores;
    } else {
        valores += x;
        document.getElementById("resultados").value = valores;
    }
}

function calculate() {
    valores = eval(valores);
    document.getElementById("resultados").value = valores;
}