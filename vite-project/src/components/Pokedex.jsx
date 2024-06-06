import { useState, useEffect } from "react"
import '../App.css'

function Pokedex() {
    const [id, setId] = useState(1);//iniciando id com valor 1
    const [pokemon, setpokemon] = useState(null);// iniciando dado pokemon com valor null

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json();
            setpokemon(data);
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]
    );

    

    const nextPokemon = () => {
        setId(id + 1);
    }

    const backPokemon = () => {
        setId(id - 1);
    }
    return (
        <div className="pokedex">
            <div className="cabeca">
                <img src="pokeball.png" className="logo" />
                <h1 className="pk">Pokédex</h1>
            </div>
            {pokemon && (

                <div className="pokemon">
                    <p className="nome">{pokemon.name}</p>
                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="img" />
                    <div className="botao">
                        <button onClick={backPokemon}>Voltar Pokemon</button>
                        <button onClick={nextPokemon}>Próximo Pokemon</button>
                    </div>
                </div>

            )

            }
        </div>
    )
}

export default Pokedex