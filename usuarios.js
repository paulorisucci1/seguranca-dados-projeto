class Usuarios {
    constructor() {
        this.usuarios = [];
    }

    listar() {
        return this.usuarios;
    }

    adicionar(usuario) {
        this.usuarios.push(usuario);
    }

    remover(cpf) {
        const indexUsuarioRemovido = this.usuarios.indexOf(usuario => usuario.cpf === cpf);
        this.usuarios.slice(indexUsuarioRemovido, 1);
    }
} 