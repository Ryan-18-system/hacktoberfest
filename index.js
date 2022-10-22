
const times = [{ selecao: "Brasil", pontos: 0, partidas: 0, gols: 0 }, { selecao: "Argentina", pontos: 0, partidas: 0, gols: 0 }, { selecao: "Alemanhã", pontos: 0, partidas: 0, gols: 0 }, { selecao: "Camarões", pontos: 0, partidas: 0, gols: 0 }]


console.log(...times)

const times = ["grêmio","flamengo","corintians","palmeiras","Santos"]
times.forEach((time)=>{
    console.log(time)
})

const idPiada = document.getElementById('piada')
const gerarPiada = document.getElementById('gerarPiada')


gerarPiada.addEventListener('click', () => {
    const piada = fetch('https://api.chucknorris.io/jokes/random').then((response) => {
       return response.json()
    }).then((response)=>{
        idPiada.innerText = response.value
    })
})
