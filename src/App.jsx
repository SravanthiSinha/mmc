import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Resources from './pages/Resources';
import Specialties from './pages/Specialties';
import TraumaTherapy from './pages/TraumaTherapy';
import RelationshipCounseling from './pages/Relationship-Counselling';
import FamilyCulturalDynamics from './pages/Family-Culture-Dynamic';
import StressBurnout from './pages/Stress-BurnOut';
import PrivacyPolicy from './pages/PrivacyPolicy';
import OurTeam from './pages/OurTeam';
import NotFound from './pages/NotFound';
import JoinOurTeam from './pages/JoinOurTeam';
import ChineseServices from './pages/ChineseServices';
import Contact from './pages/Contact';
import IndividualTherapy from './pages/IndividualTherapy';
import CouplesTherapy from './pages/CouplesTherapy';
import WellnessCoaching from './pages/WellnessCoaching';
import AnxietyTherapy from './pages/AnxietyTherapy';
import DepressionTherapy from './pages/DepressionTherapy';
import WomensTherapy from './pages/WomensTherapy';
import ASIABIOPCTherapy from './pages/ASIABIOPCTherapy';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/services" element={<Specialties />} />
          <Route path="/anxiety-therapy" element={<AnxietyTherapy />} />
          <Route path="/depression-therapy" element={<DepressionTherapy />} />
          <Route path="/womens-therapy" element={<WomensTherapy />} />
          <Route path="/asia-bipoc-therapy" element={<ASIABIOPCTherapy />} />
          <Route path="/trauma-therapy" element={<TraumaTherapy />} />
          <Route path="/relationship-counseling" element={<RelationshipCounseling />} />
          <Route path="/family-cultural-dynamic" element={<FamilyCulturalDynamics />} />
          <Route path="/stress-burnout" element={<StressBurnout />} />
          <Route path="/individual-therapy" element={<IndividualTherapy />} />
          <Route path="/couples-therapy" element={<CouplesTherapy />} />
          <Route path="/wellness-coaching" element={<WellnessCoaching />} />
          <Route path="/chinese-services" element={<ChineseServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;