

function verificarCPF(p){
    var i;
    s = p.value;
    var c = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;
    var v = true;
 
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(10-i);
    }
    if (d1 == 0){
        v = false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
        v =  false;
    }
 
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
        v =  false;
    }
    
    return v;
}

function validarData(obj)
{
    var data = obj.value;
    var dia = data.substring(0,2)
    var mes = data.substring(3,5)
    var ano = data.substring(6,10)
 
    //Criando um objeto Date usando os valores ano, mes e dia.
    var novaData = new Date(ano,(mes-1),dia);
 
    var mesmoDia = parseInt(dia,10) == parseInt(novaData.getDate());
    var mesmoMes = parseInt(mes,10) == parseInt(novaData.getMonth())+1;
    var mesmoAno = parseInt(ano) == parseInt(novaData.getFullYear());
 
    if (!((mesmoDia) && (mesmoMes) && (mesmoAno)))
    {
        return false;
    }  
    return true;
}

function validar() {
    var cpf = document.getElementById("cpf");
    var nome = document.getElementById("nome");
    var sexoM = document.getElementById("sexoM");
    var sexoF = document.getElementById("sexoF");
    var cidade = document.getElementById("cidade");
    var data = document.getElementById("data");
    var ret = true;
    
    if (cpf.value == '') {
        alert('CPF é campo obrigatório!!!');
        cpf.style = "border-color: #FF0000";
        ret = false;
    } else {
        if (!verificarCPF(cpf)) {
            alert('CPF inválido!!!');
            cpf.style = "border-color: #FF0000";
            ret = false;
        } else {
            cpf.style = "border-color: none";
        }
    }
    
    if (nome.value == '') {
        alert('Nome é campo obrigatório!!!');
        nome.style = "border-color: #FF0000";
        ret = false;
    } else {
        nome.style = "border-color: none";
    }
    
    if (cidade.value == '') {
        alert('Cidade é campo obrigatório!!!');
        cidade.style = "border-color: #FF0000";
        ret = false;
    } else {
        cidade.style = "border-color: none";
    }
    
    if (!sexoM.checked && !sexoF.checked) {
        alert('Sexo é campo obrigatório!!!');
        sexoM.style = "border-color: #FF0000";
        sexoF.style = "border-color: #FF0000";
        ret = false;
    } else {
        sexoM.style = "border-color: none";
        sexoF.style = "border-color: none";
    }
    
    if (!validarData(data)) {
        alert('Data de nascimento inválida!!!');
        data.style = "border-color: #FF0000";
        ret = false;
    } else {
        data.style = "border-color: none";
    }
    
    return ret;
}