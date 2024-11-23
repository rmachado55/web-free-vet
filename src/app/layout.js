import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";

export const metadata = {
  title: "Free Vet Web App",
  description: "Aplicação web para veterinários a domicílio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={"hubot-sans-body"}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
