import { Text, Box } from '@chakra-ui/react'
import { margins, bodyFontSizes, borderRadius } from '../../pages'

const Card = ({ title, text, index, ...rest }) => {
	return (
		<Box
			p={margins}
			borderRadius={borderRadius}
			bg="var(--chakra-colors-grey)"
			data-scroll
			data-scroll-speed={`${index}`}
			{...rest}
		>
			<Text
				fontWeight={600}
				fontSize={{ base: '16px', md: '20px', lg: '22px', xl: '28px' }}
			>
				{title}
			</Text>
			<Text fontSize={bodyFontSizes} mt={margins}>
				{text}
			</Text>
		</Box>
	)
}

export default Card
