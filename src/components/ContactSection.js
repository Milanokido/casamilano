import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.location.href = "tel:0164460505";
  };

  return (
    <section id="contact" className="py-16 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            📞 Nous Contacter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une envie subite ? Contactez-nous directement pour passer commande
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-xl border-orange-200">
            <CardHeader className="text-center bg-orange-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Phone className="h-6 w-6" />
                Commandez par téléphone
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  01 64 46 05 05
                </div>
                <p className="text-gray-600">
                  Notre équipe vous accueille avec plaisir
                </p>
              </div>

              <Button
                onClick={handleCall}
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="h-6 w-6 mr-3" />
                Appeler maintenant
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Commande rapide</p>
                    <p className="text-sm text-gray-600">Prêt en 15-20 min</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Livraison gratuite</p>
                    <p className="text-sm text-gray-600">7j/7 à Orsay</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-center text-yellow-800 font-medium">
                  💡 Astuce : Mentionnez nos promotions lors de votre appel !
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;