import Head from "next/head";
import Children from "../../types/Children";
import { PageHolder } from "../../styles/global";
import Header, { HeaderProps } from "../Header/Header";
import { backgroundBlue } from "../../styles/colors";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoadUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { useRouter } from "next/router";

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
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/thumbnails/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/thumbnails/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/thumbnails/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/thumbnails/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/thumbnails/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/thumbnails/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/thumbnails/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/thumbnails/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/thumbnails/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/thumbnails/apple-touch-icon.png"
        />

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
