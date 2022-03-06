const pegaArquivo = require('./index')
const validaURLs = require('./http-validacao')

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminho[2]);
    if(caminho[3] === 'validar'){
        console.log('Links validados:', await validaURLs(resultado))
    } else{
        console.log('Lista de Links:', resultado)
    }   
}

processaTexto(caminho);