const getrawgio = async(name, image, aliancas) => {//função para pegar os dados da api
    const panel = document.createElement('div');//cria um div
    panel.innerHTML += `
        <div class="card">
            <div class="nome">
                ${name}
            </div>
            <div class="image">
                <img src="${image}"
            </div>
            <div class="biografia">
                <p> Alianças com herois:
                    ${aliancas};
                </p>
            </div>
        </div>
    `;
    const $conteudo = document.querySelector('#conteudo');//pega o conteudo do html
    $conteudo.appendChild(panel);//adiciona o panel ao conteudo
}
const exibeDados = async() => {//função para exibir os dados
    for(let i = 1; i < 33; i++){//loop para pegar os dados da api
        const url = `https://superheroapi.com/api/1552656308273724/${i}`;//url da api
        const getApi = await fetch(url);//fetch para pegar os dados da api
        const json = await getApi.json();//json para pegar os dados da api
        var name = await json.name;//nome do heroi
        var image = await json.image.url;//imagem do heroi
        var aliancas = await json.biography.aliases;//alianças do heroi
        getrawgio(name, image, aliancas);//chama a função para exibir os dados
    }
}
exibeDados();
const buscaApi = async() => {//função para buscar os dados da api
    const inputName = document.getElementById('txtbuscar').value;//pega o valor do input
    const url = `https://superheroapi.com/api/1552656308273724/search/${inputName}`;//url da api
    const getApi = await fetch(url);//fetch para pegar os dados da api
    const json = await getApi.json();//json para pegar os dados da api
    const dados = await json.results[0];//dados da api
    var name = await dados.name;//nome do heroi
    var image = await dados.image.url;//imagem do heroi
    var aliancas = await dados.biography.aliases;//alianças do heroi
    document.getElementById('conteudo').innerHTML = "";//limpa o conteudo
    getrawgio(name, image, aliancas);//chama a função para exibir os dados
    console.log(dados);//exibe os dados
}
const $imgBuscar = document.getElementById("imgBuscar");//pega a imagem do botão
$imgBuscar.addEventListener('click', buscaApi);//adiciona um evento ao clicar na imagem