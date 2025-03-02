import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Resources from './pages/Resources';
import Specialties from './pages/Specialties';
import AnxietyDepression from './pages/Anxiety-Depression';
import Trauma from './pages/Trauma-PTSD';
import RelationshipCounseling from './pages/Relationship-Counselling';
import FamilyCulturalDynamics from './pages/Family-Culture-Dynamic';
import StressBurnout from './pages/Stress-BurnOut';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OurTeam from './pages/OurTeam';
import NotFound from './pages/NotFound';
import JoinOurTeam from './pages/JoinOurTeam';
import ChineseServices from './pages/ChineseServices';

const App = () => {
  return (
    <BrowserRouter basename="/mmc">
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/anxiety-depression" element={<AnxietyDepression />} />
          <Route path="/trauma-ptsd" element={<Trauma />} />
          <Route path="/relationship-counseling" element={<RelationshipCounseling />} />
          <Route path="/family-cultural-dynamic" element={<FamilyCulturalDynamics />} />
          <Route path="/stress-burnout" element={<StressBurnout />} />
          <Route path="/services" element={<ChineseServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;