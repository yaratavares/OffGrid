import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TypeUserContextProvider } from "./contexts/TypeUserContext";
import PageInit from "./pages/PageInit";
import PageLogin from "./pages/PageLogin";
import PageSignUp from "./pages/PageSignUp";
import { StyleGlobal } from "./styles/StyleGlobal";

export default function App() {
  return (
    <>
      <StyleGlobal />
      <TypeUserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageInit />} />
            <Route path="/login" element={<PageLogin />} />
            <Route path="/signup" element={<PageSignUp />} />
          </Routes>
        </BrowserRouter>
      </TypeUserContextProvider>
    </>
  );
}
