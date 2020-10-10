//import Global styles
import "../styles/globals.scss";
import "../styles/_variables.scss";

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

import Layout from "../component/Layout";
import { AppContextProvider } from "../Context/Wrapper";

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
