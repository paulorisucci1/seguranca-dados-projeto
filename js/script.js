
const joao = new Usuario('123', 'João', undefined, undefined, '12345678987', 'j@a', '12345678')
const usuarios = new Usuarios();
usuarios.adicionar(joao);

function logar(event) {

    event.preventDefault();

    let emailElement = document.querySelector('#emailLogin');
    let senhaElement = document.querySelector('#senhaLogin');

    let email = emailElement.value;
    let senhaLogin = senhaElement.value;

    console.log(email);
    console.log(senhaLogin);

    const usuarioEncontrado = 
        usuarios.listar().find(usuario => usuario.email === email
             && usuario.senha === senhaLogin);

    if(usuarioEncontrado) {
        console.log("login efetuado com sucesso");
    } else {
        console.log("login não foi efetuado com sucesso");
    }

    _limparInputs(emailElement, senhaElement);
}

function adicionar(event) {
    event.preventDefault();

    let formularioCadastro = _capturarFormularioCadastro();

    if(!_inputsDeCadastroEstaoValidos(formularioCadastro)) {
        console.error("Os dados enviados para cadastro estão inválidos");
        return false;
    }

    let novoUsuario = _criarUsuarioAtravesDoFormulario(formularioCadastro);

    usuarios.adicionar(novoUsuario);

    console.log('Usuário adicionado com sucesso');
    console.log(usuarios);

    _limparInputs(formularioCadastro.matriculaElement, formularioCadastro.nomeElement, formularioCadastro.foneElement,
        formularioCadastro.enderecoElement, formularioCadastro.cpfElement, formularioCadastro.emailElement,
        formularioCadastro.senhaElement);
}

function _capturarFormularioCadastro() {

    return {
        "matriculaElement": document.querySelector('#matricula'),
        "nomeElement": document.querySelector('#nome'),
        "foneElement": document.querySelector('#fone'),
        "enderecoElement": document.querySelector('#endereco'),
        "cpfElement": document.querySelector('#cpf'),
        "emailElement": document.querySelector('#emailRegister'),
        "senhaElement": document.querySelector('#senhaRegister')
    };
}

function _inputsDeCadastroEstaoValidos(formularioCadastro) {
    return _validarMatricula(formularioCadastro.matriculaElement.value) &&
    _validarNome(formularioCadastro.nomeElement.value) &&
    _validarFone(formularioCadastro.foneElement.value) &&
    _validarEndereco(formularioCadastro.enderecoElement.value) &&
    _validarCpf(formularioCadastro.cpfElement.value) &&
    _validarEmail(formularioCadastro.emailElement.value) &&
    _validarSenha(formularioCadastro.senhaElement.value);
}

function _validarMatricula(matricula) {
    return matricula.length > 0 && matricula.length <= 20;
}

function _validarNome(nome) {
    return nome.length > 0 && nome.length <= 60;
}

function _validarFone(fone) {
    return fone.length > 0 && fone.length <= 14;
}

function _validarEndereco(endereco) {
    return endereco.length > 0 && endereco.length <= 60;
}

function _validarCpf(cpf) {
    return cpf.length === 11;
}

function _validarEmail(email) {
    return email.length > 0 && email.length <= 45;
}

function _validarSenha(senha) {
    return senha.length >= 8 && senha.length <= 30;
}

function _criarUsuarioAtravesDoFormulario(formularioCadastro) {

    let matricula = formularioCadastro.matriculaElement.value;
    let nome = formularioCadastro.nomeElement.value;
    let fone = formularioCadastro.foneElement.value;
    let endereco = formularioCadastro.enderecoElement.value;
    let cpf = formularioCadastro.cpfElement.value;
    let email = formularioCadastro.emailElement.value;
    let senha = formularioCadastro.senhaElement.value;

    return new Usuario(matricula, nome, fone, endereco, cpf, email, senha);
}

function _limparInputs(...inputs) {
    inputs.forEach(input => input.value = '');
}
