import { Text } from '@chakra-ui/react'

const Description = ({ children }) => {
	return (
		<Text
			fontWeight={500}
			fontSize= { ['0.9rem', '1rem', null, '1.15rem', '1.5rem'] }
			lineHeight={1.5}
			mb="3rem"
		>
			{ children }
		</Text>
	)
}

export default Description
