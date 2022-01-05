const hero_container = document.getElementById('hero-container');
const token = '1552656308273724';
const hero_number = 731;
const fetchHeros = async () => {// Pega todos os heróis
    for(let i = 1; i <= hero_number; i++){//Percorre todos os heróis
        await getHero(i).catch(err => console.log(err));//Pega cada herói
    }
};
const getHero = async id => {//Pega um herói
    const url = `https://superheroapi.com/api.php/${token}/${id}`;//URL do herói
    const response = await fetch(url);//Pega o herói
    const hero = await response.json();//Transforma o herói em JSON
    createHeroCard(hero);//Cria a carta do herói
};
function capitalizeFirstletter(string){//Capitaliza a primeira letra de uma string
    return string.charAt(0).toUpperCase() + string.slice(1);//Capitaliza a primeira letra de uma string
}
function createHeroCard(hero){//Cria a carta do herói
    const heroElement = document.createElement('div');//Cria o elemento do herói
    heroElement.classList.add('hero');//Adiciona a classe do herói
    const heroInnerHTML = `
        <div class="image-container">
            <img src="${hero.image.url}">
        </div>
        <div class="info">
            <span class="number">${hero.id}</span>
            <h3 class="name">${hero.name}</h3>
            <b class="cor">Nome completo: </b>${Object.values(hero.biography)[0]}<br>
            <b class="cor">Alter ego(s): </b>${Object.values(hero.biography)[1]}<br>
            <b class="cor">Apelido(s): </b>${hero.biography.aliases}<br>
            <b class="cor">Local de nascimento: </b>${Object.values(hero.biography)[3]}<br>
            <b class="cor">Primeira aparição: </b>${Object.values(hero.biography)[4]}<br>
            <b class="cor">Editora: </b>${hero.biography.publisher}<br>
            <b class="cor">Alinhamento: </b>${hero.biography.alignment}<br>
            <h3 class="name">Aparência</h3>
            <b class="cor">Gênero sexual: </b>${hero.appearance.gender}<br>
            <b class="cor">Raça: </b>${hero.appearance.race}<br>
            <b class="cor">Altura: </b>${hero.appearance.height[0]} (${hero.appearance.height[1]})<br>
            <b class="cor">Peso: </b>${hero.appearance.weight[0]} (${hero.appearance.weight[1]})<br>
            <b class="cor">Cor dos olhos: </b>${Object.values(hero.appearance)[4]}<br>
            <b class="cor">Cor do cabelo: </b>${Object.values(hero.appearance)[5]}<br>
            <h3 class="name">Trabalho</h3>
            <b class="cor">Ocupação: </b>${hero.work.occupation}<br>
            <b class="cor">Sede: </b>${hero.work.base}<br>
            <h3 class="name">Conexões</h3>
            <b class="cor">Grupos: </b>${Object.values(hero.connections)[5]}<br>
            <b class="cor">Parentes: </b>${hero.connections.relatives}<br>
            <h3 class="name">Estatisticas</h3>
            <ul>
                <li>
                    Inteligência (${Object.values(hero.powerstats)[0]} / 100)
                    <progress max="100" value="${Object.values(hero.powerstats)[0]}"></progress>
                </li>
                <li>
                    Força (${Object.values(hero.powerstats)[1]} / 100)
                    <progress max="100" value="${Object.values(hero.powerstats)[1]}"></progress>
                </li>
                <li>
                    Velocidade (${Object.values(hero.powerstats)[2]} / 100)
                    <progress max="100" value="${Object.values(hero.powerstats)[2]}"></progress>
                </li>
                <li>
                    Durabilidade (${Object.values(hero.powerstats)[3]} / 100)
                    <progress max="100" value="${Object.values(hero.powerstats)[3]}"></progress>
                </li>
                <li>
                    Poder (${Object.values(hero.powerstats)[4]} / 100)
                    <progress max="100" value="${Object.values(hero.powerstats)[4]}"></progress>
                </li>
                <li>
                    Combate (${Object.values(hero.powerstats)[5]} / 100)
                    <progress max="100" value="${Object.values(hero.powerstats)[5]}"></progress>
                </li>
            </ul>
        </div>
    `;
    heroElement.innerHTML = heroInnerHTML;
    hero_container.appendChild(heroElement);
}
fetchHeros();//Pega todos os heróis