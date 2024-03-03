function alunosAprovados(alunos) {
    // Filtra os alunos que tiveram nota maior ou igual a 6
    var aprovados = alunos.filter(function(aluno) {
        return aluno.nota >= 6;
    });
    return aprovados;
}

// Array de objetos representando alunos
var alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 4 },
    { nome: "Ana", nota: 9 },
    { nome: "Paula", nota: 5 }
];

// Chamada da função e impressão do resultado
var alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);
