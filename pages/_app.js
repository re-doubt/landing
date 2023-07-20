import '../styles/globals.css'
import '../styles/locomotive.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp ({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<Head>
					<title>re:doubt | Real-time security & operational monitoring</title>
					<meta
						name="description"
						content="re:doubt is a powerful tool for TON blockchain research, complete with all the tools you need to discover, explore, and visualize vast amounts of blockchain data; lets anyone, anywhere learn about crypto hacks, scams, and fraudulent activity so they can more safely participate in the growing crypto economy."
					/>
					<meta name="theme-color" content="#0088CC" />
					<script>
					window.onload = function() {
						window.location.href = "https://beta.redoubt.online";
					}
					</script>
					<link rel="icon" href="/meta/favicon.ico" />
					<link
						rel="apple-touch-icon"
						href="/meta/android-chrome-192x192.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/meta/apple-touch-icon.png?v=1"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/meta/favicon-32x32.png?v=1"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/meta/favicon-16x16.png?v=1"
					/>
					<link rel="manifest" href="/meta/site.webmanifest?v=1" />
					<link
						rel="mask-icon"
						href="/meta/safari-pinned-tab.svg?v=1"
						color="#d4212d"
					/>
					<link rel="shortcut icon" href="/meta/favicon.ico?v=1" />
					<meta name="msapplication-TileColor" content="#0088CC" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=block"
						rel="stylesheet"
					/>
				</Head>

				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp
