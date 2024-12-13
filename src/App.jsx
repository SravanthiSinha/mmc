import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Resources from './pages/Resources';
import Specialties from './pages/Specialties';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter basename="/mmc">
    <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;