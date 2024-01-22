const fraseHolder = document.getElementById('fraseHolder');

const artigos = ['O', 'Os', 'Um', 'Uns', 'A', 'As', 'Uma', 'Umas'];
const sujeitos = ["menino", "cachorro", "pássaro", "carro", "navio", "rio", "livro", "relógio", "espelho", "sapato",
    "menina", "banana", "música", "chave", "cadeira", "praia", "janela", "fotografia", "estrela", "lua"];
const verbos = ["corre", "anda", "pula", "fala", "vive", "brinca", "trabalha", "estuda", "dorme", "ouve"];
const finalizacoes = ["no quarto", "enquanto está frio", "debaixo da mesa", "perto do rio", "antes do amanhecer", "durante a festa", "sob as estrelas", "atrás da cortina", "ao lado do parque", "em cima da hora"];

const montaFrase = () => {
    //Sorteia um elemento do array artigos
    const artigoEscolhido = sorteiaElemento(artigos);
    const oArtigo = artigos[artigoEscolhido];

    //Checa se o artigo é Masculino ou Feminino
    const generoArtigo = (mascOuFem(artigoEscolhido));

    //Checa se está no plural
    const ePlural = oArtigo.slice(-1) === 's';

    //Escolhendo o sujeito
    sujeitoEscolhido = generoArtigo === 'masculino' ? 
        sorteiaElemento(sujeitos.slice(0, sujeitos.length / 2)) : 
        sorteiaElemento(sujeitos.slice(sujeitos.length / 2, sujeitos.length), sujeitos.length / 2 - 1);
    let oSujeito = sujeitos[sujeitoEscolhido];

    //Escolhendo verbo
    verboEscolhido = sorteiaElemento(verbos);
    let oVerbo = verbos[verboEscolhido];

    //Ajustando sujeito e verbo caso artigo seja plural
    if (ePlural){
        oSujeito = oSujeito + 's';
        oVerbo = oVerbo + 'm';
    }

    //Escolhendo finalizadores
    finalizacaoEscolhida = sorteiaElemento(finalizacoes);
    const aFinalizacao = finalizacoes[finalizacaoEscolhida];

    const fraseMontada = `${oArtigo} ${oSujeito} ${oVerbo} ${aFinalizacao}`;
    fraseHolder.innerText = fraseMontada;
}

const sorteiaElemento = (arr, sum = 0) => {
    return Math.floor((Math.random() * arr.length) + sum);
}

const mascOuFem = num => {
    return num <= 3 ? 'masculino' : 'feminino';
}

montaFrase();
