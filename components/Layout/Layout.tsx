import Head from "next/head";
import Children from "../../types/Children";
import { PageHolder } from "../../styles/global";
import Header, { HeaderProps } from "../Header/Header";
import { backgroundBlue } from "../../styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLoadUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { useRouter } from "next/router";
import useWebsockets from "../../hooks/useWebscokets/useWebsockets";
import State from "../../types/State";

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
  const { startConnection } = useWebsockets();
  const { user } = useSelector((state: State): State => state);

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

  useEffect(() => {
    if (user.id) {
      startConnection(user.id);
    }
  }, [startConnection, user.id]);
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
