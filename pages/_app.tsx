//import Global styles
import "../styles/globals.scss";
import "../styles/_variables.scss";
import "../styles/home.scss";

//import Layout styles
import "../component/style/Navbar.scss";
import "../component/style/Layout.scss";

//import Component styles
import "../component/style/Header.scss";
import "../component/style/projectCard.scss";
import "../component/TypeData/TypeData.scss";

//import Pages styles
import "../styles/Home.module.scss";
import "../styles/projects/projects.scss";
import "../styles/acerca/acerca.scss";

//Import Footer styles
import "../component/style/Footer.scss";

import Layout from "../component/Layout";
import { AppContextProvider } from "../Context/Wrapper";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
