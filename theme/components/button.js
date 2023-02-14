export const Button = {
    baseStyle: {
        bgColor: 'var(--chakra-colors-blue) !important',
        fontSize: ['12px', '14px', '16px', '18px'],
        color: '#fff',
        p: { base: '4px', md: '8px', lg: '12px 24px' },
        height: { base: '26px', md: 'initial' },
        minWidth: 'initial',
        border: '2px solid var(--chakra-colors-blue)',
        fontWeight: '600',
        borderRadius: '24px',
        _hover: {
            bgColor: 'var(--chakra-colors-bluelight) !important',
            color: 'var(--chakra-colors-white)',
            border: '2px solid var(--chakra-colors-bluelight)',
        },
    },
    variants: {
        outline: {
            bgColor: 'transparent !important',
            color: 'var(--chakra-colors-blue)',
            border: '2px solid var(--chakra-colors-blue) !important',
            _hover: {
                bgColor: 'var(--chakra-colors-bluelight) !important',
                color: 'var(--chakra-colors-white)',
                border: '2px solid var(--chakra-colors-bluelight) !important',
            },
        },
    },
}
