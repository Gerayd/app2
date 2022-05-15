import type { NextPage } from 'next'
import Image from 'next/image'
import { useCountries } from '../app/hooks/useCountries'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	const { isLoading, countries } = useCountries()

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>React Query</h1>

				{isLoading ? (
					<div>Loading...</div>
				) : countries?.length ? (
					<div className={styles.grid}>
						{countries.map(country => (
							<div className={styles.card} key={country.id}>
								<Image
									alt={country.title}
									width={294}
									height={208}
									src={country.image}
								/>
								<h2>{country.title}</h2>
								<p>
									<b>Population:</b> {country.population}
								</p>
							</div>
						))}
					</div>
				) : (
					<div>Elements not found</div>
				)}
			</main>
		</div>
	)
}

export default Home
