const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message);
}


async function checaStatus(arrayURLs){
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url)
            return `${res.status} - ${res.statusText}`;;
        }))
        return arrayStatus;
    }
    catch(erro){
        manejaErros(erro)
    }
}

function geraArrayDeLinks(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURLs(arrayLinks){
    const links = geraArrayDeLinks(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultado  = arrayLinks.map((objeto, indice) => ({...objeto, status:
    statusLinks[indice]}))
    return resultado;
}

module.exports = validaURLs;