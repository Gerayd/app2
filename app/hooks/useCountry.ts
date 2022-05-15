import { useQuery } from 'react-query'
import { CountryService, ICountry } from '../services/country.service'

export const useCountry = (id?: string) => {
	const { isLoading, data: country } = useQuery(
		['country list', id],
		() => CountryService.getById(id || ''),
		{
			onError: (error: any) => {
				alert(error.message)
			},
			select: ({ data }): ICountry => data,
			enabled: !!id,
		}
	)

	return { isLoading, country }
}
