import { Box } from '@chakra-ui/react'
import { margins, borderRadius, boxShadow } from '../../pages'

export const Toast = ({ color, text }) => (
	<Box
		color="white"
		p={margins}
		borderRadius={borderRadius}
		bg={color}
		display="flex"
		justifyContent="center"
		alignItems="center"
		boxShadow={boxShadow}
	>
		{text}
	</Box>
)
