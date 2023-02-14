import { Box, Button, Link, Text } from '@chakra-ui/react'
import { LogoIcon } from './icons/LogoIcon'

export const logoSize = { base: '30px', md: '40px', lg: '50px' }
const buttonPadding = { base: '4px', md: '8px', lg: '12px 24px' }

export const nullifyButtons = {
	w: 'initial',
	minH: 'initial',
	minW: 'initial',
	paddingInlineStart: buttonPadding,
	paddingInlineEnd: buttonPadding,
	h: { base: '24px', md: '32px', lg: 'initial' }
}

const Logo = () => {
	return (
		<Box display="flex" justifyContent="flex-start" alignItems="center">
			<LogoIcon
				color="var(--chakra-colors-blue)"
				w={logoSize}
				h={logoSize}
			/>
			<Text
				ml={{ base: '4px', sm: '8px', md: '12px' }}
				fontWeight={600}
				fontSize={{ base: '20px', md: '28px', lg: '32px' }}
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
				<Button variant="outline" {...nullifyButtons}>
					<Link
						href="https://github.com/re-doubt/.github/blob/main/profile/README.MD"
						target="_blank"
					>
                        Documentation
					</Link>
				</Button>
				<Button
					ml={{
						base: '8px',
						md: '16px',
						xl: '24px'
					}}
					{...nullifyButtons}
				>
					<Link href="https://app.redoubt.online">Launch app</Link>
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
