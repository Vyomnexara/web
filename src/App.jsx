import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import VerticalChooser from "./components/VerticalChooser";
import { VerticalProvider } from "./context/VerticalContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ITHome from "./pages/it/ITHome";
import ITServicesPage from "./pages/it/ITServicesPage";

/* Scrolls to the hash target on navigation (e.g. /#contact, /it/services#database-cloud),
   or to the top when there is no hash. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <VerticalProvider>
        <ScrollManager />
        <VerticalChooser />
        <Layout>
          <Routes>
            {/* Corporate Advisory — Vyomnexara Consulting LLP */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />

            {/* Information Technology — Vyomnexara Information Technology */}
            <Route path="/it" element={<ITHome />} />
            <Route path="/it/services" element={<ITServicesPage />} />
          </Routes>
        </Layout>
      </VerticalProvider>
    </BrowserRouter>
  );
}

export default App;
