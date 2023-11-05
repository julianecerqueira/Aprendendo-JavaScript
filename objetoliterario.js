var curiosidades_chuck_norris = [
    { titulo: "Cuidados com sua Saúde Mental",                                                     conteudo: "Chuck Norris Por que a saúde mental é importante?"},
    { titulo: "podcart Priorize Sua Saúde Mental - Um Ato de Autocompaixão",                       conteudo: "Chuck Norris 1 episódio Autoconhecimento."},
    { titulo: "O primeiro passo para cuidar da sua saúde mental é conhecer a si mesmo.",           conteudo: "Chuck Norris Por que Cuidar da Sua Saúde Mental é uma Prioridade Inegociável"},
    { titulo: "O Caminho para uma Vida de Excelência: Uma Boa Saúde Mental",                       conteudo: "não subestime o poder da sua saúde mental na busca de uma qualidade de vida elevada."},
   
   
];

var tamanho_colecao = curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);