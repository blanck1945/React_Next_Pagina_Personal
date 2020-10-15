import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pagina Personal</title>
      </Head>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
