const idPiada = document.getElementById('piada')
const gerarPiada = document.getElementById('gerarPiada')


gerarPiada.addEventListener('click', () => {
    const piada = fetch('https://api.chucknorris.io/jokes/random').then((response) => {
       return response.json()
    }).then((response)=>{
        idPiada.innerText = response.value
    })
})

