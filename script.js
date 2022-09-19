
const joao = new Usuario('123', 'João', undefined, undefined, '12345678987', 'j', '1')
const usuarios = new Usuarios();
usuarios.adicionar(joao);

function logar(event) {
    event.preventDefault();

    email = document.querySelector('#email').value;
    senhaLogin = document.querySelector('#senhaLogin').value;

    console.log(email)
    console.log(senhaLogin)

    const usuarioEncontrado = 
        usuarios.listar().find(usuario => usuario.email === email
             && usuario.senha === senhaLogin);

    if(usuarioEncontrado) {
        alert("login efetuado com sucesso");
    } else {
        alert("deu errado");
    }
}

function adicionar(event) {
    event.preventDefault();

    matricula = document.querySelector('#matricula').value;
    nome = document.querySelector('#nome').value;
    fone = document.querySelector('#fone').value;
    endereco = document.querySelector('#endereco').value;
    cpf = document.querySelector('#cpf').value;
    email = document.querySelector('#email').value;
    senha = document.querySelector('#senha').value;

    novoUsuario = new Usuario(matricula, nome, fone, endereco, cpf, email, senha);

    usuarios.adicionar(novoUsuario);

    console.log(usuarios);
}
