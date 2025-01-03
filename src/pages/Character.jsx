import React from 'react'
import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import { useEpisodeById } from '../hooks/useEpisode'
import { Card } from '../components/Card/Card1/Card1/'
import { Text } from '../components/Text/Text/'

export const Character = () => {
	const { characterId } = useParams()
	const {data: character, isFetched: isCharacter} = useCharacter(characterId)
    
	const  episodeId  = character?.episode[0]?.split("/").pop()
	const {data: episode, isFetched: isEpisode} = useEpisodeById(episodeId)
	return (
		<>
			{isCharacter && <Card data={character}/>}
			{isCharacter && isEpisode && <Text data={character} episode={episode}/>}
		</>
	)
}
