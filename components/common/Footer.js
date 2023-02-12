import { Box, Grid, Link } from '@chakra-ui/react'
import { margins } from '../../pages'
import { GithubIcon } from './icons/GithubIcon'
import { TgIcon } from './icons/TgIcon'

export const Footer = ({ ...rest }) => {
	return (
		<Box display="flex" justifyContent="flex-end" alignItems="center" {...rest}>
			<Grid
				display="grid"
				gridTemplateColumns="repeat(4,max-content)"
				gridGap={margins}
			>
				<Link
					href="https://github.com/re-doubt/.github/blob/main/profile/README.MD"
					target="_blank"
				>
          Documentation
				</Link>
				<Link href="https://beta.redoubt.online" target="_blank">
          Launch app
				</Link>
				<Link href="https://github.com/re-doubt/" target="_blank">
					<GithubIcon color="var(--chakra-colors-black)" w="30px" h="30px" />
				</Link>
				<Link href="https://t.me/re_doubt" target="_blank">
					<TgIcon color="var(--chakra-colors-black)" w="30px" h="30px" />
				</Link>
			</Grid>
		</Box>
	)
}
