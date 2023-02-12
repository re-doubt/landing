import { Title } from '../common/Title'
import { Box, Image, Text } from '@chakra-ui/react'
import { bodyFontSizes, margins } from '../../pages'

export const Intro = ({ ...rest }) => {
	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			{...rest}
		>
			<Box
				data-scroll
				data-scroll-speed="0.3"
				data-scroll-direction="horizontal"
			>
				<Title as="h1">📈 Data Analytics for everyone</Title>
				<Text mt={{ ...margins }} maxW="620px" fontSize={bodyFontSizes}>
          re:doubt is a powerful tool for TON blockchain research, complete with
          all the tools you need to discover, explore, and visualize vast
          amounts of blockchain data; lets anyone, anywhere learn about crypto
          hacks, scams, and fraudulent activity so they can more safely
          participate in the growing crypto economy.
				</Text>
			</Box>

			<Box
				pos="relative"
				w="608px"
				h="532px"
				data-scroll
				data-scroll-speed="-0.3"
				data-scroll-direction="horizontal"
			>
				<Image
					src="./img/intro/illustration.png"
					w="100%"
					pos="absolute"
					top="0"
					right="-80px"
				/>
			</Box>
		</Box>
	)
}
