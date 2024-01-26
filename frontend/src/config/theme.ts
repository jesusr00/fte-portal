import { createTheme } from "@mui/material";
import { PoppinsOverride } from "../assets/fonts";

export const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    }, 
   components: {
    MuiCssBaseline: {
        styleOverrides: PoppinsOverride
    }
   }
})
