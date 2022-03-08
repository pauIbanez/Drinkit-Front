import Head from "next/head";
import store from "../../redux/store";
import Children from "../../types/Children";
import { Provider } from "react-redux";
import { PageHolder } from "../../styles/global";
import Header, { HeaderProps } from "../Header/Header";

interface Props {
  children: Children;
  header?: HeaderProps;
}

const Layout = ({ children, header }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Drink it!</title>
      </Head>
      <Provider store={store}>
        <PageHolder>
          {header && <Header title={header.title} subtitle={header.subtitle} />}
          {children}
        </PageHolder>
      </Provider>
    </>
  );
};

export default Layout;
