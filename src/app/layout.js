import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export const metadata = {
  title: "Free Vet Web App",
  description: "Aplicação web para veterinários a domicílio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <AppRouterCacheProvider>
        <body className={"hubot-sans-body"}>
          {children}
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
