function valida(){
    var nome = document.getElementById('nome');
    if (nome.value == ""){
        alert('Digite o seu nome');
    } else {
        alert('O seu nome é ' +nome.value);
}
}