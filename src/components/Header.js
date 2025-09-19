import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:0164460505";
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Made Larger */}
          <div className="flex-shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_milano-eats-france/artifacts/v70e2197_ChatGPT%20Image%2015%20sept.%202025%2C%2017_49_54.png"
              alt="Casa Milano"
              className="h-16 w-auto sm:h-18 md:h-20"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("promos")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Promos
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("infos")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Infos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleCall}
              className="bg-orange-500 hover:bg-orange-600 text-white hidden sm:flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Commander</span>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("promos")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Promos
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("galerie")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection("a-propos")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("infos")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Infos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={handleCall}
                className="bg-orange-500 hover:bg-orange-600 text-white flex items-center space-x-2 w-fit"
              >
                <Phone className="h-4 w-4" />
                <span>Commander</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;