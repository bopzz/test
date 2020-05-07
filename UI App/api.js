async function getPokemon(){
    for (let i=0;i<100;i++){
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let data = await res.json();
        pokeIngs.innerHTML += "" 
    }
}