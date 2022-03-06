const fs = require('fs')

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm;
    const linksExtraidos = regex.exec(texto);
    console.log(linksExtraidos);
}

function trataErro(erro){
    throw new Error(erro.code, 'Não há arquivos no caminho.');
}

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados.length === 0 ? 'Não há links.' : arrayResultados;
}

function trataErro(erro) {
  throw new Error((erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'UTF-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
  } catch(erro) {
    trataErro(erro);
  }   
}

module.exports = { pegaArquivo, jones }

//function pegaArquivo(caminhoDoArquivo){
//    const encoding = 'UTF-8';
//    fs.promises
//    .readFile(caminhoDoArquivo, encoding)
//    .then((texto) => console.log(texto))
//    .catch((erro) => trataErro(erro))
//}
    

//function pegaArquivo(caminhoDoArquivo){
//    const encoding = 'UTF-8';
//    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//       if (erro){
//            trataErro(erro)
//        }
//        console.log(texto);
//   })
//}
