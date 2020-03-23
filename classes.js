class Pessoa {
    constructor(nome, altura, sexo) {
        this.nome = nome;
        this.altura = altura;
        this.sexo = sexo;
    }

    getAltura() {
        return this.altura;
    }

    
}

const pessoa = new Pessoa('Felipe Gonçalves', '1.88', 'm');


console.log(pessoa);
console.log(pessoa.getAltura());
