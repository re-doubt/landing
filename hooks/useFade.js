import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { animBase, animBaseBottom } from '../utils/anji'

export function useFadeY () {
	const anim = useAnimation()
	const [ref, refInView] = useInView({
		threshold: 0.7
	})

	useEffect(() => {
		if (refInView) {
			anim.start(animBaseBottom)
		}
	}, [refInView])

	return [ref, anim]
}

export function useFadeX () {
	const anim = useAnimation()
	const [ref, refInView] = useInView({
		threshold: 0.7
	})

	useEffect(() => {
		if (refInView) {
			anim.start(animBase)
		}
	}, [refInView])

	return [ref, anim]
}
