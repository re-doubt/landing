import { extendTheme } from '@chakra-ui/react'
import { Button } from './components/button'
import { Link } from './components/link'

const theme = extendTheme({
    fonts: {
        heading: 'Inter',
        body: 'Inter',
    },
    components: {
        Button,
        Link,
    },
    colors: {
        blue: '#0088CC',
        bluelight: '#9ADDFF',
        green: '#40EC51',
        red: '#EC5540',
        grey: '#F7F9FB',
        black: '#232328',
    },
})

export default theme
