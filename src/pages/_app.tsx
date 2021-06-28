import { ThemeProvider } from "@material-ui/core";
import Head from "next/head";

import Header from "ui/components/surfaces/Header/Header";
import theme from "ui/themes/theme";
import { AppContainer } from "ui/styles/pages/_app.style";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CNI/SENAI</title>
        <link rel="stylesheet" href="/fonts/tw-icons/css/treinaweb-icons.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
