import "../styles/globals.css";
import "@fontsource/open-sans";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import WSContextProvider from "../contexts/WSContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WSContextProvider>
        <Component {...pageProps} />
      </WSContextProvider>
    </Provider>
  );
}

export default MyApp;
