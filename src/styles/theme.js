import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      vaiants: {
        header: {
          bg: "laranja.500"

        }
      }
    }
  },
  colors: {
    laranja: {
      500: "#FE7E02"
    }
  }
})