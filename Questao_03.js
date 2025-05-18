function mostrarNotas(nome, nota1, nota2) {
    let peso1 = nota1 * 0.6;
    let peso2 = nota2 * 0.4;
    let total = peso1 + peso2;

    alert(`Aluno: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}`);
    alert(`Nota Total de ${nome}: ${total}`);
}

mostrarNotas("João da Silva", 7, 8.5);
mostrarNotas("Maria Oliveira", 6, 9.0);
mostrarNotas("Pedro Santos", 8, 7.5);
