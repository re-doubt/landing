import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import classes from '../theme/misc.module.scss'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const NavLink = ({ children, id }) => {
	const { scroll } = useLocomotiveScroll()

	const scrollTo = (id) => {
		scroll && scroll.scrollTo(id)
	}

	return (
		<Box
			data-scroll data-scroll-position="top" data-scroll-speed="1"
			cursor="pointer"
			onClick={() => { scrollTo(id) }}
			mr={ ['1rem', '2rem', '3rem'] }
			sx={{
				_last: {
					mr: 0
				}
			}}
		>
			<Text
				className={classes.kost}
				fontWeight={500}
				fontSize={ ['.9rem', '1rem', null, null, '1.25rem'] }
				whiteSpace="nowrap"
			>
				{ children }
			</Text>
		</Box>
	)
}

NavLink.displayName = 'NavLink'

export default NavLink
