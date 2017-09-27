

function mascaraData(campoData){
    var data = campoData.value;
    if (isNaN(data[data.length-1]) == true) {
        campoData.value = data.substring(0, data.length-1);
        return true;
    }
    if (data.length == 2 || data.length == 5){
        data = data + '/';
        campoData.value = data;
        return true;              
    }
}

function mascaraCPF(campo){
    var cpf = campo.value;
    if (isNaN(cpf[cpf.length-1]) == true) {
        campo.value = cpf.substring(0, cpf.length-1);
        return true;
    }
}

function gerarDigito(numero,digito){
    factor = 3;
    sum = 0;

    for(index = numero.value.length; index > 0; --index){
        sum = sum + numero.value.substring (index-1, index) * factor;
        factor = 4 - factor;
    }

    cc = ((1000 - sum) % 10);

    digito.value = cc;
    numlen = numero.value.length;

    if (numlen > 17){
        digito.value = "";
        alert("O número deve possuir no máximo 17 dígitos");
        return true;
    }

    if (((((numlen != 7) && (numlen != 11)) && (numlen != 12)) && (numlen != 13)) && (numlen != 17)){
        digito.value = "";
        alert("O número deve possuir 7 (EAN/UCC-8), 11 (UCC-12), 12 (EAN/UCC-13), 13 (EAN/UCC-14) ou 17 (SSCC) dígitos");
        return true;
    }
    
    return false;
}

function validar() {
    var ret = true;
    var codigo = document.getElementById("codigo");
    var digito = document.getElementById("digito");
    var nome = document.getElementById("nome");
    var unidade = document.getElementById("unidade");
    var preco = document.getElementById("preco");
    var desc = document.getElementById("desc");
    
    if (codigo.valeu == '') {
        alert('O Campo código é obrigatório!!!');
        codigo.style = 'border-color: red';
        ret = false;
    } else {
        codigo.style = 'border-color: none';
    }
    
    if (nome.value == '') {
        alert('O Campo nome é obrigatório!!!');
        nome.style = 'border-color: red';
        ret = false;
    } else {
        nome.style = 'border-color: none';
    }
    
    if (unidade.value == '') {
        alert('O Campo unidade é obrigatório!!!');
        unidade.style = 'border-color: red';
        ret = false;
    } else {
        unidade.style = 'border-color: none';
    }
    
    if(!gerarDigito(codigo, digito)){
        alert("O código é inválido. Digite novamente");
        codigo.style = 'border-color: red';
        ret = false;
    } else {
        codigo.style = 'border-color: none';
    }
    
    return ret;
}
