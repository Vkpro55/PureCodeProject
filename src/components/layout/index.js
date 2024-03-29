import { Suspense } from "react";
import Footer from "./Footer";
import Preloader from "../Preloader";
import { Topbar, Navbar } from "./admin";

const Layout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}>{children}</Suspense>

      <Suspense>
        <Footer hideLinks />
      </Suspense>
    </Suspense>
  );
};

export default Layout;
