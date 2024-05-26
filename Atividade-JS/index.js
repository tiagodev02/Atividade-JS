function clicou() {

    var n1 = 0;
    var n2 = 0;
    while (n1 % n2 != 0) {
        var n1 = prompt('digite um numero');
        var n2 = prompt('digite outro:');
        if (n1 % n2 == 0) {
            alert(`${n1} é divisivel por ${n2}`);
        } else {
            alert(`${n1} não é divisivel por ${n2}`);
        }
    }
}
function clicou2() {
    var u = prompt('quantos numeros o vetor vai ter?');
    var x = prompt('qual o divisor?');
    var y = parseInt(prompt('qual o somador?'));
    var v = [];
    for (var i = 0; i < u; i++) {
        var numeros = prompt('insira um numero do vetor');
        numeros = (numeros / x + y);
        v.push(numeros);

    }
    console.log(`olha ai ${v} `);

}
function ordenar(a, b) {
    return a - b;
}
function clicou3() {
    var v = [39, 6, '7', '10', 34, '16', 32, 46, 23, '37'];
    var u = [36, '36', 34, '23', 10, 4, 31, 32, 39, 32];
    v.sort(ordenar);
    u.sort(ordenar);
    for (var i = 0; i < 10; i++) {
        if (v[i] === u[i]) {
            console.log(`${v[i]} é exatamente igual a ${u[i]}\n`);
        }
        if (v[i] == u[i]) {
            console.log(`${v[i]} é igual a ${u[i]}\n`);
        }
        if (v[i] != u[i]){
            console.log(`${v[i]} não é igual a ${u[i]}\n`);
        }
    }
}