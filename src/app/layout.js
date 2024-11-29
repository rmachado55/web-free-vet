import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from "./theme/theme";

export const metadata = {
  title: "Free Vet Web App",
  description: "Aplicação web para veterinários a domicílio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
      {children}      
      </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
