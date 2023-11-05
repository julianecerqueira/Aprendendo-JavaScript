const dataUltimoAcesso = new Date('2023/11/06 17:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";

if ( hora < 6 || hora >= 18 ) {
  msg = 'Boa noite\n';
} else if (hora >= 6  && hora < 12 ) {
  msg = 'Bom dia\n';
} else {
  msg = 'Boa tarde\n';
}

if ( diferencaTime > milissegundosDia ) {
  msg += "Olá fico feliz por seu retorna em nosso site. Pois notei que Você está ausente há dias! Podemos te ajudar em alguma coisa especifica estamos aqui para lhe atender";
} else if (diferencaTime > milissegundosHora) {
  msg += "Você está ausente há horas!!!";
} else {
  msg += "Que bom que ainda está aqui! Podemos te ajudar em alguma coisa especifica estamos aqui para lhe atender";
}

console.log(msg);