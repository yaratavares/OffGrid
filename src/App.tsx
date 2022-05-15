import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyleGlobal } from './styles/StyleGlobal';
import PageInit from './pages/PageInit';

export default function App() {
  return (
    <>
      <StyleGlobal />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageInit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
