import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  components: {
    Button,
  },
  colors: {
    blue: "#0088CC",
    green: "#40EC51",
    red: "#EC5540",
    grey: "#F7F9FB",
    black: "#232328",
  },
});

export default theme;
