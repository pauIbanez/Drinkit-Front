import Head from "next/head";
import store from "../../redux/store";
import Children from "../../types/Children";
import { Provider } from "react-redux";
import { PageHolder } from "../../styles/global";
import Header, { HeaderProps } from "../Header/Header";
import { backgroundBlue } from "../../styles/colors";

interface Props {
  children: Children;
  pageTitle?: string;
  header?: HeaderProps;
  color?: string;
}

const Layout = ({
  children,
  header,
  pageTitle,
  color = backgroundBlue,
}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>{pageTitle ? `${pageTitle} | Drink it!` : "Drink it!"}</title>
        <base href="/" />
      </Head>
      <Provider store={store}>
        <PageHolder color={color}>
          {header && <Header title={header.title} subtitle={header.subtitle} />}
          {children}
        </PageHolder>
      </Provider>
    </>
  );
};

export default Layout;
