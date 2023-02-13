import { Box, Button, Grid, Link } from '@chakra-ui/react'
import Card from '../common/Card'
import { Title } from '../common/Title'
import { margins } from '../../pages'

const cases = [
	{
		title: 'Explore',
		text: 're:doubt is a powerful tool for TON blockchain research, complete with all the tools you need to discover, explore, and visualize'
	},
	{
		title: 'Create and share',
		text: 'Community-created analytics: Tons of dashboards for hundreds of projects. Query human-readable data with SQL. Follow key metrics for DeFi, NFTs, and more.'
	},
	{
		title: 'Detect and monitor',
		text: 're:doubt is a community-based security platform to prevent or mitigate smart contract exploits as they occur. The goal of re:doubt is to detect threats and other system-critical issues in real-time. '
	}
]

export const UseCases = () => {
	return (
		<Box>
			<Title as="h2">💼 Use cases</Title>
			<Grid gridTemplateColumns="1fr 1fr 1fr" gap="24px" mt={margins}>
				{cases.map(({ title, text }, i) => (
					<Card title={title} text={text} key={`case-${i}`} index={i} />
				))}
			</Grid>
			<Box
				display="flex"
				justifyContent="flex-end"
				alignItems="center"
				mt={margins}
				data-scroll
				data-scroll-speed={4}
			>
				<Button>
					<Link
						href="https://github.com/re-doubt/.github/blob/main/profile/README.MD"
						target="_blank"
					>
            Explore in docs
					</Link>
				</Button>
			</Box>
		</Box>
	)
}
