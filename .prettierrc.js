/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: false, // usa aspas simples
  trailingComma: 'all', // vírgula no último item (objetos/arrays)
  tabWidth: 2, // tamanho da identação
  semi: true, // ponto e vírgula no final das linhas
  printWidth: 100, // quebra linha quando passar de 100 chars
  bracketSpacing: true, // espaço entre chaves { a: 1 }
  arrowParens: 'always', // arrow functions sempre com parênteses
  endOfLine: 'auto', // previne erros de \n e \r no Windows/Linux
};
