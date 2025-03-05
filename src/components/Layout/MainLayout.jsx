import Navbar from './Navbar';
import Footer from './Footer';
import BookNowCTA from '../shared/BookNowCTA';
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto">
        {children}
      </main>
       {/* Sticky Mobile CTA - Always visible on smaller screens */}
       <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-50">
                <BookNowCTA className="w-full flex justify-center" />
            </div>
      <Footer />
    </div>
  );
};

export default MainLayout;