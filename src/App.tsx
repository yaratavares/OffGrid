import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageInit from "./pages/PageInit";
import PageLogin from "./pages/PageLogin";
import { StyleGlobal } from "./styles/StyleGlobal";

export default function App() {
  return (
    <>
      <StyleGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageInit />} />
          <Route path="/login" element={<PageLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
