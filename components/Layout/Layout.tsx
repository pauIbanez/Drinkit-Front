import Head from "next/head";
import Children from "../../types/Children";

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
      {children}
    </>
  );
};

export default Layout;
