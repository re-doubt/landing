import { Box, Image, useQuery, Text, SkeletonCircle } from '@chakra-ui/react'
import { useEffect } from 'react'
import { apiClient, API_URL } from '../../api/client'
import { margins, borderRadius, boxShadow } from '../../pages'

const imageSize = '36px'
const smallText = { base: '12px', md: '14px', lg: '18px' }

const Property = ({ name, value, change, tonPrice, ...rest }) => {
    const tonP = parseFloat(tonPrice)

    const getValue = (name) => {
        switch (name) {
            case 'Price':
                return `$${(value * tonP).toFixed(2)}`
            case 'Volume':
                return `$${parseInt(value * tonP, 10)}`

            default:
                return value
        }
    }

    const valueF = getValue(name)
    const color =
        change > 0 ? 'var(--chakra-colors-green)' : 'var(--chakra-colors-red)'

    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            {...rest}
        >
            <Text fontSize={smallText} fontWeight={600}>
                {name}:&nbsp;
                {valueF}
            </Text>
            <Box
                bg={color}
                ml="8px"
                borderRadius={borderRadius}
                fontSize={smallText}
                p="2px 6px"
            >
                <Text color="white" fontWeight={600}>
                    {change}%
                </Text>
            </Box>
        </Box>
    )
}

export const Jetton = ({ jetton, index, total, tonPrice, ...rest }) => {
    const { address, name, price, marketVolume, totalHolders } = jetton
    return (
        <Box
            p={margins}
            border="2px solid var(--chakra-colors-blue)"
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            data-scroll
            data-scroll-speed={total - index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDir="row"
            {...rest}
        >
            <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                flexDir="row"
            >
                <Image
                    src={`${API_URL}v1/jettons/image/${address}`}
                    w={imageSize}
                    h={imageSize}
                />
                <Text ml="12px" fontWeight={600}>
                    {name}
                </Text>
            </Box>

            <Box display="grid" gridTemplate="1fr" gridGap="4px">
                {[
                    [price, 'Price'],
                    [marketVolume, 'Volume'],
                    [totalHolders, 'Holders'],
                ].map(([prop, name], index) => (
                    <Property
                        name={name}
                        value={prop.value}
                        change={prop.percent}
                        tonPrice={tonPrice}
                        key={`${address}-${name}`}
                    />
                ))}
            </Box>
        </Box>
    )
}
