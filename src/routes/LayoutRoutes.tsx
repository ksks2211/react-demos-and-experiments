import { Route, Routes } from "react-router-dom";
import Layout01 from "../pages/layout01/Layout01";
import Layout02 from "../pages/layout02/Layout02";
import Layout03 from "../pages/layout03/Layout03";
import Layout04 from "../pages/layout04/Layout04";
import Layout05 from "../pages/layout05/Layout05";
import Layout06 from "../pages/layout06/Layout06";
import Layout07 from "../pages/layout07/Layout07";
import Layout08 from "../pages/layout08/Layout08";
import Layout09 from "../pages/layout09/Layout09";
import Layout10 from "../pages/layout10/Layout10";
import Layout11 from "../pages/layout11/Layout11";
import Layout12 from "../pages/layout12/Layout12";
import Layout13 from "../pages/layout13/Layout13";

export default function LayoutRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Layout01 />} />
      <Route path="/l1" element={<Layout01 />} />
      <Route path="/l2" element={<Layout02 />} />
      <Route path="/l3" element={<Layout03 />} />
      <Route path="/l4" element={<Layout04 />} />
      <Route path="/l5" element={<Layout05 />} />
      <Route path="/l6" element={<Layout06 />} />
      <Route path="/l7" element={<Layout07 />} />
      <Route path="/l8" element={<Layout08 />} />
      <Route path="/l9" element={<Layout09 />} />
      <Route path="/l10" element={<Layout10 />} />
      <Route path="/l11" element={<Layout11 />} />
      <Route path="/l12" element={<Layout12 />} />

      <Route path="/l13" element={<Layout13 />} />
    </Routes>
  );
}
