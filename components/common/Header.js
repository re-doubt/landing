import { Box, Button, Link, Text } from '@chakra-ui/react'
import { LogoIcon } from './icons/LogoIcon'

const Logo = () => {
	return (
		<Box display="flex" justifyContent="flex-start" alignItems="center">
			<LogoIcon color="var(--chakra-colors-blue)" w="50px" h="50px" />
			<Text
				ml="12px"
				fontWeight={600}
				fontSize="32px"
				lineHeight="32px"
				color="var(--chakra-colors-blue)"
			>
        re:doubt
			</Text>
		</Box>
	)
}

export const Header = () => {
	return (
		<Box {...headerStyles}>
			<Logo />
			<Box display="flex" justifyContent="flex-end">
				<Button variant="outline">
					<Link
						href="https://github.com/re-doubt/.github/blob/main/profile/README.MD"
						target="_blank"
					>
            Documentation
					</Link>
				</Button>
				<Button
					ml={{
						sm: '12px',
						md: '18px',
						xl: '24px'
					}}
				>
					<Link href="http://beta.redoubt.online">Launch app</Link>
				</Button>
			</Box>
		</Box>
	)
}

const headerStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
}
