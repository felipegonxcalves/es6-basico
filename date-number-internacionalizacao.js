//api Intl

let date = new Date();

console.log(new Intl.DateTimeFormat('pt-BR').format(date));

//Se eu quiser o mês por extenso, traduzido na localidade
console.log(new Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(date));

//Se eu quiser o mês por extenso, traduzido na localidade
console.log(new Intl.DateTimeFormat('pt-BR', {month: 'long', day: 'numeric', year: 'numeric'}).format(date));

// Formatação de números

console.log(new Intl.NumberFormat('pt-BR').format(2.2));

console.log(new Intl.NumberFormat('pt-BR').format(2000.22));

console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000.22));

console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, currency: 'BRL', style: 'currency'}).format(2000.22));

