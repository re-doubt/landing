import { Box, Grid, Link } from '@chakra-ui/react'
import { margins } from '../../pages'
import { GithubIcon } from './icons/GithubIcon'
import { TgIcon } from './icons/TgIcon'

const links = [
	{
		item: <>Documentation</>,
		link: 'https://github.com/re-doubt/.github/blob/main/profile/README.MD'
	},
	{
		item: <>Launch app</>,
		link: 'https://app.redoubt.online'
	},
	{
		item: (
			<GithubIcon color="var(--chakra-colors-black)" w="30px" h="30px" />
		),
		link: 'https://github.com/re-doubt/'
	},
	{
		item: <TgIcon color="var(--chakra-colors-black)" w="30px" h="30px" />,
		link: 'https://t.me/re_doubt'
	}
]

export const Footer = ({ ...rest }) => {
	return (
		<Box
			display="flex"
			justifyContent="flex-end"
			alignItems="center"
			{...rest}
		>
			<Grid
				display="grid"
				gridTemplateColumns={`repeat(${links.length},max-content)`}
				gridGap={margins}
			>
				{links.map(({ item, link }, i) => (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						key={`link-${i}`}
					>
						<Link href={link} target="_blank">
							{item}
						</Link>
					</Box>
				))}
			</Grid>
		</Box>
	)
}
