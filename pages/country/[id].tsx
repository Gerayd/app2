import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCountry } from '../../app/hooks/useCountry'

import styles from '../../styles/Home.module.css'

const Country: NextPage = () => {
	const { query } = useRouter()

	const { country, isLoading } = useCountry(String(query?.id))

	return (
		<div className={styles.container}>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<main className={styles.main}>
					<h1 className={styles.title}>{country?.title}</h1>
					<div className={styles.grid}>
						<div className={styles.card}>
							<Image
								alt={country?.title}
								width={294}
								height={208}
								src={country?.image || ''}
							/>
							<h2>{country?.title}</h2>
							<p>
								<b>Population:</b> {country?.population}
							</p>
						</div>
					</div>
				</main>
			)}
		</div>
	)
}

export default Country
