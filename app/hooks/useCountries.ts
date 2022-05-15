import { useQuery } from 'react-query'
import { CountryService, ICountry } from '../services/country.service'

export const useCountries = () => {
	const { isLoading, data: countries } = useQuery(
		'country list',
		() => CountryService.getAll(),
		{
			onError: (error: any) => {
				alert(error.message)
			},
			select: ({ data }): ICountry[] =>
				data.map(country => ({
					...country,
					title: country.title + ' !',
				})),
		}
	)

	return { isLoading, countries }
}
