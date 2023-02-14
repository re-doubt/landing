import { Box, Text, useToast } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Header } from '../components/common/Header'
import { Intro } from '../components/sections/Intro'
import { UseCases } from '../components/sections/UseCases'
import { Jettons } from '../components/sections/Jettons'
import { Footer } from '../components/common/Footer'
import { useQuery } from 'react-query'
import { apiClient } from '../api/client'
import { Toast } from '../components/common/Toast'

export const bodyFontSizes = {
	base: '12px',
	md: '14px',
	lg: '18px',
	xl: '20px'
}

const pxToInt = (px) => parseInt(px.substring(0, 2), 10)

export const margins = { base: '12px', md: '18px', lg: '24px' }
export const borderRadius = '24px'
export const boxShadow = '8px 8px 5px rgba(0, 0, 0, 0.07);'
const sectionMargins = { base: '80px', sm: '100px', md: '200px', lg: '60px' }

const footerMargins = Object.values(sectionMargins).map(
	(el) => `${pxToInt(el) + 60}px`
)

export default function Home () {
	const [jettons, setJettons] = useState([])
	const { data, isLoading, isError } = useQuery('top-jettons', async () => {
		return await apiClient.get('/v1/jettons/top')
	})
	const toast = useToast()

	useEffect(() => {
		if (isError) {
			toast({
				render: () => (
					<Toast
						text="Error loading jettons, retrying..."
						color="var(--chakra-colors-red)"
					/>
				)
			})
		}
	}, [isError])

	useEffect(() => {
		if (data?.data?.jettons) {
			setJettons(data.data.jettons)
		}
	}, [data])

	const containerRef = useRef()
	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				lerp: 0.1,
				multiplier: 1.2
			}}
			containerRef={containerRef}
		>
			<main
				data-scroll-container
				ref={containerRef}
				className="container"
			>
				<Box data-scroll-section {...wrapperProps}>
					<Header />

					{/*  app sections */}
					<Intro mt={sectionMargins} />
					<UseCases mt={{ ...sectionMargins, lg: '0' }} />

					<Box mt={sectionMargins}>
						{isLoading
							? (
								<Text fontSize={bodyFontSizes}>
                                Loading jettons...
								</Text>
							)
							: (
								<Jettons jettons={jettons.slice(0, 3)} />
							)}
					</Box>

					<Footer mt={footerMargins} />
				</Box>
			</main>
		</LocomotiveScrollProvider>
	)
}

const wrapperProps = {
	padding: { base: '20px', sm: '30px', md: '40px', lg: '50px', xl: '60px' }
}
