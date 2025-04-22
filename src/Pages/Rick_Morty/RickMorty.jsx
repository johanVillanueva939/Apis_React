import React from "react"
import "./RickMorty.css"
import { useState } from "react"
import Cards from "../../UI/Cards/Cards"
const URL = 'https://rickandmortyapi.com/api/character'

export const RickMorty = () => {
	const [characters, setCharacters] = useState([])

	const handleGetCharacters = async () => {
		const response = await fetch(URL)
		const data = await response.json()
		setCharacters(data.results)
	}

	return (
		<>
			<button onClick={handleGetCharacters}>Traer personajes</button>
			<section className="flex flex-wrap justify-center gap-4 mt-4">
				{characters.map((character) => (
					<Cards key={character.id} {...character} />
				))}
			</section>
		</>
	)
}

export default RickMorty
