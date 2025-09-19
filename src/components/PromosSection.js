import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const PromosSection = () => {
  const promos = [
    {
      title: "Promo Pizza Senior",
      description: "Pour chaque pizza Senior achetée, la 2ᵉ est à 2 €.",
      subtitle: "À emporter ou sur place",
      asterisk: "Offre valable sur pizzas Senior, hors Margherita. La 2ᵉ pizza Senior (la moins chère) est facturée 2,00 €.",
      badge: "Économisez jusqu'à 15 €",
      bgColor: "bg-orange-50 border-orange-200"
    },
    {
      title: "Promo Pizza Méga",
      description: "Pour chaque pizza Méga achetée, la 2ᵉ est à 4 €.",
      subtitle: "À emporter ou sur place",
      asterisk: "Offre valable sur pizzas Méga, hors Margherita. La 2ᵉ pizza Méga (la moins chère) est facturée 4,00 €.",
      badge: "Économisez jusqu'à 18 €",
      bgColor: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section id="promos" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            🔥 Nos Promotions Exceptionnelles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profitez de nos offres spéciales pour régaler toute la famille
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promos.map((promo, index) => (
            <Card 
              key={index} 
              className={`${promo.bgColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-800">
                  {promo.title}
                </CardTitle>
                {promo.badge && (
                  <Badge variant="secondary" className="bg-orange-500 text-white w-fit">
                    {promo.badge}
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-2 font-medium text-lg">
                  {promo.description}
                </p>
                <p className="text-orange-600 font-semibold mb-4 text-base">
                  {promo.subtitle}
                </p>
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  * {promo.asterisk}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromosSection;