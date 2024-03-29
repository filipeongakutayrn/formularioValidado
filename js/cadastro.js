//------------------------------------------------------------------------------

function cadastrar() {

    let nome = validaNome(document.getElementById('nome').value);
    if (nome == false) {
        alert('Insira um nome válido');
        document.getElementById('nome').focus();
        return;
    }

    let fone = document.getElementById('fone').value;


    let cidade = document.getElementById('cidade').value;


    let sexo = '';
    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('fem').checked) {
        sexo = 'Feminino';
    } else {
        sexo = 'Prefiro não comentar';
    }

    insereNaTabela(nome, fone, sexo, cidade)

    limparFormulario();

}
//--------------------------------------------------------------------------------------------------
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('fone').value = '';
    document.getElementById('cidade').value = 'Natal';
    document.getElementById('masc').checked = true;
    document.getElementById('nome').focus();
}

//-----------------------------------------------------------------------------------------------

function validaNome(nome) {
    let texto = nome.trim().toUpperCase();
    for (let i = 0; i < texto.length; i++) {
        if (ehNumero(texto[i])) {

            return false;
        }
    }
    return texto;
}
//-----------------------------------------------------------------------------------------------
function ehNumero(numero) {
    return !isNaN(numero)
}
//-----------------------------------------------------------------------------------------------
function insereNaTabela(nome, fone, sexo, cidade) {
    let tabela = document.getElementById('lista-contatos');
    let ultimaLinha = tabela.rows.length;
    let linha = tabela.insertRow(ultimaLinha);

    let campoId = linha.insertCell(0)
    let campoNome = linha.insertCell(1)
    let campoFone = linha.insertCell(2)
    let campoSexo = linha.insertCell(3)
    let campoCidade = linha.insertCell(4)
    let acoes = linha.insertCell(5)


    campoId.innerHTML = ultimaLinha ;
    campoNome.innerHTML = nome;
    campoFone.innerHTML = fone;
    campoSexo.innerHTML = sexo;
    campoCidade.innerHTML = cidade;
    acoes.innerHTML = insereBotoesAcoes();
}
//-----------------------------------------------------------------------------------------------

function insereBotoesAcoes() {
    let botaoEditar = '<button class="btn btn-outline-primary btn-sm">';
    botaoEditar += '<i class="fas fa-pencil-alt"></i>';
    botaoEditar += '</button>';
    
    let botaoRemover = '<button class="btn btn-danger btn-sm">';
    botaoRemover += ' <i class="fas fa-trash-alt"></i>';
    botaoRemover += '</button>';
    return botaoEditar + botaoRemover;
}