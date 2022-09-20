import sha256 from 'crypto-js/sha256';

class Usuario {
    
    constructor(matricula, nome, fone, endereco, cpf, email, senha) {
        this._matricula = matricula;
        this._nome = nome;
        this._fone = fone;
        this._endereco = endereco;
        this._cpf = cpf;
        this._email = email;
        this._senha = this.senha(senha);
    }

    set matricula(novaMatricula) {
        this._matricula = novaMatricula;
    }

    get matricula() {
        return this._matricula;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    get fone() {
        return this._fone;
    }

    set fone(fone) {
        this._fone = fone
    }

    get endereco() {
        return this._endereco;
    }

    set endereco(endereco) {
        this._endereco = endereco;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }
 
    set email(login) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set senha(senha) {
        this._senha = this._criptografar(senha);
    }

    get senha() {
        return this._senha;
    }

    _criptografar(senha) {
        return sha256(senha);
    }
}