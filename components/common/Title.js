import { Heading } from '@chakra-ui/react'

export const Title = ({ children, as }) => {
	const getFontSize = (as) => {
		switch (as) {
		case 'h1':
			return ['22px', '28px', '34px', '40px', '46x']

		case 'h2':
			return ['18px', '22px', '28px', '32px', '36px']

		default:
			return ['1.2rem', '1.5rem', '2rem', '2.5rem', '3rem']
		}
	}

	return (
		<Heading
			fontWeight={800}
			fontSize={getFontSize(as)}
			lineHeight={'58px'}
			as={as}
		>
			{children}
		</Heading>
	)
}
