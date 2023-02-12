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
			<Text fontWeight={600} fontSize="28px">
				{title}
			</Text>
			<Text fontSize={bodyFontSizes}>{text}</Text>
		</Box>
	)
}

export default Card
