import React from "react";
import { Card, CardContent } from "./ui/card";
import { Heart, Award, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            🏪 À Propos de Casa Milano
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Situé au cœur d'Orsay, Casa Milano vous accueille dans une ambiance chaleureuse pour 
            savourer nos délicieuses spécialités halal. Depuis notre ouverture, nous nous engageons 
            à vous proposer des pizzas artisanales, des tacos savoureux et des plats tex-mex préparés 
            avec des ingrédients frais et de qualité. Notre équipe passionnée met tout en œuvre pour 
            vous offrir une expérience culinaire authentique et mémorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cuisine avec Passion</h3>
              <p className="text-gray-600">
                Chaque plat est préparé avec amour et attention aux détails pour votre plus grand plaisir
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-green-50 border-green-200">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Qualité Halal</h3>
              <p className="text-gray-600">
                Tous nos produits respectent les standards halal les plus stricts pour votre tranquillité d'esprit
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Service Rapide</h3>
              <p className="text-gray-600">
                Livraison gratuite 7j/7 à Orsay pour vous régaler rapidement à domicile
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;