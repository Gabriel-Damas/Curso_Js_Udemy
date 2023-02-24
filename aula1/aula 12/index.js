const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio';
    if(verdadeira){
        var nome2 = 'Otavio';
        let nome = 'Outras coisa';
    }


console.log(nome, nome2)
}