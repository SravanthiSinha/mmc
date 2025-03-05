import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../../constants';
// Reusable BookNow CTA component for consistency
const BookNowCTA = ({ className = "", size = "md" }) => {
    // Size variants
    const sizeClasses = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-xl px-8 py-4"
    };
  
    return (
      <Link
        to={BOOKING_URL}
        target="_blank"
        className={`inline-block bg-brand-coral text-white font-bold 
          ${sizeClasses[size]} rounded-full hover:bg-brand-coralLight transition-all duration-200
          hover:transform hover:scale-105 active:scale-95 ${className}`}
      >
        Book Now
      </Link>
    );
  };

  export default BookNowCTA;