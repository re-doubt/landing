import { Box, Button, Grid, Link } from '@chakra-ui/react'
import { Jetton } from '../common/Jetton'
import { Title } from '../common/Title'
import { margins } from '../../pages'
import { useEffect, useState } from 'react'
import { COINGECKO_API } from '../../api/client'
import { useQuery } from 'react-query'
import axios from 'axios'

export const Jettons = ({ jettons }) => {
	const [tonPrice, setTonPrice] = useState(0)
	const { data: prices } = useQuery('jetton-prices', async () => {
		return axios.get(COINGECKO_API)
	})

	useEffect(() => {
		if (prices?.data?.['the-open-network']) {
			setTonPrice(prices.data['the-open-network']?.usd)
			console.log(parseInt(prices.data['the-open-network'].usd, 10))
		}
	}, [prices])

	return (
		<Box>
			<Title
				as="h2"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="2"
			>
        💵 Trending jettons
			</Title>
			<Grid gridTemplateColumns="1fr 1fr 1fr" gap={margins}>
				{jettons.map((jetton, index) => (
					<Jetton
						jetton={jetton}
						index={index}
						total={jettons.length}
						key={`jetton-${index}`}
						tonPrice={tonPrice}
					/>
				))}
			</Grid>

			<Box
				mt={margins}
				display="flex"
				justifyContent="flex-end"
				alignItems="center"
				flexDir="row"
				data-scroll
				data-scroll-speed={2}
			>
				<Button>
					<Link href="https://app.redoubt.online">Explore in app</Link>
				</Button>
			</Box>
		</Box>
	)
}
