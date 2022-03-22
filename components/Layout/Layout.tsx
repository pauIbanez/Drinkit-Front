import Head from "next/head";
import Children from "../../types/Children";
import { PageHolder } from "../../styles/global";
import Header, { HeaderProps } from "../Header/Header";
import { backgroundBlue } from "../../styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { getLoadUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { useRouter } from "next/router";
import WSContext from "../../contexts/wsContext";

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
  const dispatch = useDispatch();
  const router = useRouter();

  const wsInstance = useContext(WSContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getLoadUserThunk(token));
    } else if (
      !router.pathname.includes("login") &&
      !router.pathname.includes("register")
    ) {
      router.push("/accounts/login");
    }
  }, [dispatch, router]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>{pageTitle ? `${pageTitle} | Drink it!` : "Drink it!"}</title>
        <base href="/" />
      </Head>
      <PageHolder color={color}>
        {header && <Header title={header.title} subtitle={header.subtitle} />}
        {children}
      </PageHolder>
    </>
  );
};

export default Layout;
