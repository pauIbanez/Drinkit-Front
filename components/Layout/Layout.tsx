import Head from "next/head";
import store from "../../redux/store";
import Children from "../../types/Children";
import { Provider } from "react-redux";
interface Props {
  children: Children;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Drink it!</title>
      </Head>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Layout;
