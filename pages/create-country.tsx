import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation } from 'react-query'

import styles from '../styles/Home.module.css'
import { CountryService, ICountry } from '../app/services/country.service'

const CreateCountry: NextPage = () => {
	const [data, setData] = useState<ICountry>({
		id: 5,
		image: '/images/new-zeeland.jpeg',
		population: '',
		title: '',
	} as ICountry)

	const { push } = useRouter()

	const { isLoading, mutateAsync } = useMutation(
		'create country',
		(data: ICountry) => CountryService.create(data),
		{
			onSuccess: () => {
				push('/')
			},
			onError: (error: any) => {
				alert(error.message)
			},
		}
	)

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		await mutateAsync(data)
	}

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>Create country</h1>
				<div className={styles.grid}>
					<div className={styles.card}>
						<form onSubmit={handleSubmit}>
							<input
								placeholder='Enter id'
								value={data.id}
								onChange={e =>
									setData({
										...data,
										id: +e.target.value,
									})
								}
							/>
							<input
								placeholder='Enter image'
								value={data.image}
								onChange={e =>
									setData({
										...data,
										image: e.target.value,
									})
								}
							/>
							<input
								placeholder='Enter title'
								value={data.title}
								onChange={e =>
									setData({
										...data,
										title: e.target.value,
									})
								}
							/>
							<input
								placeholder='Enter population'
								value={data.population}
								onChange={e =>
									setData({
										...data,
										population: e.target.value,
									})
								}
							/>

							<button disabled={isLoading}>Create</button>
						</form>
					</div>
				</div>
			</main>
		</div>
	)
}

export default CreateCountry
