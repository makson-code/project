import { useQuery } from "@tanstack/react-query"
import { characters } from "../api/api"

export const useCharacter = (id) => {
	return useQuery({
		queryFn: () => characters.getCharacterById(id),
		queryKey: ['character', id],
		enabled: !!id,
		select: data => data.data
	});
};
export const useEpisodeByUrl = (url) => {
	return useQuery({
	  queryFn: () => characters.getEpisodeByUrl(url),
	  queryKey: ['episode', url],
	  enabled: !!url,
	  select: (data) => data.data 
	})
}