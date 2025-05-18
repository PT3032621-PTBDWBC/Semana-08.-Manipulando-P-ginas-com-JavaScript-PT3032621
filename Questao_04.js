class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() >= 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 6, 5.5),
    new Aluno("Pedro", "Santos", 8, 7.5),
    new Aluno("Ana", "Costa", 4, 6),
    new Aluno("Lucas", "Martins", 9, 9.5)
];

function mostrarDados() {
    alunos.forEach(aluno => {
        alert(
            `Nome: ${aluno.nomeCompleto()}\n` +
            `Média: ${aluno.media().toFixed(2)}\n` +
            `Situação: ${aluno.situacao()}`
        );
    });
}

mostrarDados();
