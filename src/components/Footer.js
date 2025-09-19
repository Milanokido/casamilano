import React from "react";
import { Button } from "./ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const handleCall = () => {
    window.location.href = "tel:0164460505";
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            {/* New logo for footer - visible on dark background */}
            <img
              src="https://customer-assets.emergentagent.com/job_milano-eats-france/artifacts/hda80ujp_ChatGPT%20Image%2016%20sept.%202025%2C%2010_13_57.png"
              alt="Casa Milano"
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Restaurant halal à Orsay proposant pizzas, tacos, sandwichs et plats tex-mex.
            </p>
            <div className="bg-orange-500 text-white py-2 px-4 rounded-lg inline-block">
              <p className="font-semibold">🚚 Livraison gratuite 7j/7 à domicile & au bureau</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <div className="space-y-3">
              <button
                onClick={() => document.getElementById("promos")?.scrollIntoView({ behavior: "smooth" })}
                className="block w-full text-gray-300 hover:text-orange-400 transition-colors"
              >
                Nos Promotions
              </button>
              <button
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="block w-full text-gray-300 hover:text-orange-400 transition-colors"
              >
                Menu Complet
              </button>
              <button
                onClick={() => document.getElementById("galerie")?.scrollIntoView({ behavior: "smooth" })}
                className="block w-full text-gray-300 hover:text-orange-400 transition-colors"
              >
                Galerie Photos
              </button>
              <button
                onClick={() => document.getElementById("a-propos")?.scrollIntoView({ behavior: "smooth" })}
                className="block w-full text-gray-300 hover:text-orange-400 transition-colors"
              >
                À Propos
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">
                  17 Avenue de Montjay, 91400 Orsay
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">01 64 46 05 05</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Ouvert 7j/7</span>
              </div>
              <div className="text-gray-300 text-xs">
                <p>Lun-Jeu: 11:00–14:30 • 18:00–22:30</p>
                <p>Ven: 11:00–13:00 • 18:00–23:00</p>
                <p>Sam-Dim: 18:00–23:00</p>
              </div>
            </div>
            <Button
              onClick={handleCall}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              Commander maintenant
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Casa Milano Orsay. Tous droits réservés. | Restaurant halal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;