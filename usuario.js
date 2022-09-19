class Usuario {
    
    constructor(matricula, nome, fone, endereco, cpf, email, senha) {
        this.matricula = matricula;
        this.nome = nome;
        this.fone = fone;
        this.endereco = endereco;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    setMatricula(novaMatricula) {
        this.matricula = novaMatricula;
    }

    getMatricula() {
        return this.matricula;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    getFone() {
        return this.fone;
    }

    setFone(fone) {
        this.fone = fone
    }

    getEndereco() {
        return this.endereco;
    }

    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getCpf() {
        return this.cpf;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }
 
    setEmail(login) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setSenha(senha) {
        this.senha = senha;
    }
}