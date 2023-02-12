import { Box } from '@chakra-ui/react'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { apiClient } from '../api/client'
import { Header } from '../components/common/Header'
import { Intro } from '../components/sections/Intro'
import { UseCases } from '../components/sections/UseCases'
import { Jettons } from '../components/sections/Jettons'
import { Footer } from '../components/common/Footer'

export const bodyFontSizes = {
	base: '12px',
	sm: '14px',
	md: '16px',
	lg: '18px',
	xl: '20px'
}

export const margins = { base: '12px', md: '18px', lg: '24px' }
export const borderRadius = '24px'
export const boxShadow = '8px 8px 5px rgba(0, 0, 0, 0.07);'
const sectionMargins = { base: '20px', md: '20px', lg: '60px' }

export default function Home ({ jettons }) {
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
			<main data-scroll-container ref={containerRef} className="container">
				<Box data-scroll-section {...wrapperProps}>
					<Header />

					{/*  app sections */}
					<Intro mt={sectionMargins} />
					<UseCases />

					<Box mt={sectionMargins}>
						<Jettons jettons={jettons.slice(0, 3)} />
					</Box>

					<Footer mt={{ base: '40px', md: '60px', lg: '80px' }} />
				</Box>
			</main>
		</LocomotiveScrollProvider>
	)
}

const wrapperProps = {
	padding: '60px'
}

export async function getServerSideProps () {
	const data = (await apiClient.get('/v1/jettons/top')).data

	return {
		props: { jettons: data?.jettons || [] }
	}
}
