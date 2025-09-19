import React, { useState, useEffect } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Hero background image from vision expert agent
  const heroImage = "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296";

  useEffect(() => {
    // Preload image for better performance
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = heroImage;
  }, [heroImage]);

  const handleCall = () => {
    window.location.href = "tel:0164460505";
  };

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Promos spéciales pizzas Casa Milano"
    >
      {/* Background Image with Blur and Overlay */}
      <div className="absolute inset-0">
        {/* Fallback background color */}
        <div className="absolute inset-0 bg-green-100" style={{ backgroundColor: '#EAF6E6' }}></div>
        
        {/* Hero Image */}
        {!imageError && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: imageLoaded ? `url(${heroImage})` : 'none',
              filter: 'blur(8px)',
              transform: 'scale(1.1)', // Prevents blur edge artifacts
              opacity: imageLoaded ? 1 : 0
            }}
            aria-hidden="true"
          />
        )}
        
        {/* Adaptive Dark Overlay for Contrast */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-60"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          aria-hidden="true"
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Delivery Badge Pill */}
        <div className="mb-8 animate-fade-in-up">
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
            style={{ 
              backgroundColor: '#FF7A1A',
              color: '#FFFFFF'
            }}
            role="status"
            aria-label="Information de livraison"
          >
            <span className="text-base md:text-lg font-semibold">
              🚚 Livraison gratuite 7j/7 à domicile & au bureau
            </span>
          </div>
        </div>

        {/* Main Heading (H1) */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in-up"
          style={{ 
            animationDelay: '0.2s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
          }}
        >
          Promos spéciales pizzas
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ 
            animationDelay: '0.4s',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
          }}
        >
          Découvrez nos spécialités halal préparées maison
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {/* Primary Button - Commander */}
          <Button
            onClick={handleCall}
            size="lg"
            className="group px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-orange-300 focus:outline-none"
            style={{
              backgroundColor: '#FF7A1A',
              color: '#FFFFFF',
              borderRadius: '16px',
              minWidth: '200px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#E6681A'; // 8-10% darker
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FF7A1A';
            }}
            aria-label="Appeler Casa Milano pour commander"
          >
            <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Commander maintenant
          </Button>

          {/* Secondary Button - Menu */}
          <Button
            onClick={scrollToMenu}
            variant="outline"
            size="lg"
            className="group px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-green-200 focus:outline-none"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#2F2F2F',
              color: '#2F2F2F',
              borderRadius: '16px',
              borderWidth: '1px',
              minWidth: '200px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#EAF6E6'; // Pistachio light
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
            }}
            aria-label="Voir le menu Casa Milano"
          >
            <Menu className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
            Voir le menu
          </Button>
        </div>
      </div>

      {/* Hidden Image for SEO and Accessibility */}
      <img
        src={heroImage}
        alt="Pizza maison cuite au four – CASA Milano Orsay"
        className="sr-only"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </section>
  );
};

export default HeroSection;