import { createTheme } from "@mui/material/styles"

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: "Lato",
    subtitle1: {
      color: "#F5F5F4",
      fontWeight: "bold",
      fontSize: 32,
      textTransform: "uppercase",
      lineHeight: 1.5,
    },
    subtitle2: {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 20,
    },
    caption: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 14,
    },
    body1: {
      color: "rgba(0, 0, 0, 0.62)",
      fontWeight: "bold",
      fontSize: 18,
    },
    body2: {
      color: "#FFFFFF",
      fontWeight: "normal",
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      dark: "#24345F",
      main: "#4057E3",
      light: "#4057E3",
    },
    secondary: {
      dark: "#D9D9D9",
      main: "#FFFFFF",
      light: "#F5F5F5",
    },
    info: {
      dark: "#000000",
      main: "#24345F",
      light: "rgba(36, 52, 95, 0.3)",
    },
    error: {
      main: "#B52323",
    },
  },
})

export default theme
