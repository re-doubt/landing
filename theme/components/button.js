export const Button = {
  baseStyle: {
    bgColor: "var(--chakra-colors-blue) !important",
    fontSize: ["12px", "14px", "16px", "18px"],
    color: "#fff",
    p: "12px 24px",
    h: "initial",
    border: "2px solid var(--chakra-colors-blue)",
    fontWeight: "600",
    borderRadius: "24px",
    _hover: {
      bgColor: "transparent !important",
      color: "var(--chakra-colors-blue)",
    },
  },
  variants: {
    outline: {
      bgColor: "transparent !important",
      color: "var(--chakra-colors-blue)",
      border: "2px solid var(--chakra-colors-blue) !important",
      _hover: {
        bgColor: "var(--chakra-colors-blue) !important",
        color: "#fff",
      },
    },
  },
};
