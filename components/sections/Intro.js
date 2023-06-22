import { Title } from '../common/Title'
import { Box, Image, Text, Button, Link } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	AlertDialogCloseButton,
} from '@chakra-ui/react'
import { bodyFontSizes, margins } from '../../pages'

export const Intro = ({ ...rest }) => {
	const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true})
	const cancelRef = useRef()
	
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
				<Title as="h1">📈 TON Data for everyone</Title>
				<Text mt={{ ...margins }} maxW="620px" fontSize={bodyFontSizes}>
                    re:doubt is a powerful tool for TON blockchain research,
                    complete with all the tools you need to discover, explore,
                    and visualize vast amounts of blockchain data; lets anyone,
                    anywhere learn about crypto hacks, scams, and fraudulent
                    activity so they can more safely participate in the growing
                    crypto economy.
				</Text>
				<AlertDialog
					isOpen={isOpen}
					leastDestructiveRef={cancelRef}
					onClose={onClose}
				>
					<AlertDialogOverlay>
						<AlertDialogContent>
							<AlertDialogHeader fontSize='lg' fontWeight='bold'>
								New re:doubt version is available!
							</AlertDialogHeader>

							<AlertDialogBody>
								We are happy to invite you to test the new version of re:doubt at <Link href="https://beta.redoubt.online">beta.redoubt.online</Link>!
							</AlertDialogBody>

							<AlertDialogFooter>
								<Button ref={cancelRef} onClick={onClose}>
									Close
								</Button>
								<Button colorScheme='green' ml={3} onClick={() => {window.location = "https://beta.redoubt.online"}}>
									Let's go!
								</Button>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialogOverlay>
				</AlertDialog>
			</Box>

			<Box
				display={{ base: 'none', lg: 'block' }}
				pos="relative"
				w={{ base: '400px', xl: '608px' }}
				h="532px"
				data-scroll
				data-scroll-speed="-0.3"
				data-scroll-direction="horizontal"
			>
				<Image
					src="./img/intro/illustration.png"
					w="100%"
					pos="absolute"
					top={{ base: '0', lg: '100px', xl: '0' }}
					right="-80px"
				/>
			</Box>
		</Box>
	)
}
