import type { AppProps } from "next/app";
import Head from "next/head";

import "#/styles/globals.css";
import { DevNotesProvider } from "#/utils/store/dev-notes";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>WALLeth @ WALL</title>
      </Head>

      <DevNotesProvider>
        <Component {...pageProps} />
      </DevNotesProvider>
    </>
  );
};

export default App;
