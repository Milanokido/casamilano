import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, ExternalLink, CreditCard, Ticket, ShoppingCart } from "lucide-react";

const InfoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");

  // Updated opening hours in UTC+2
  const openingHours = {
    1: { open: "11:00", close: "14:30", secondOpen: "18:00", secondClose: "22:30" }, // Monday
    2: { open: "11:00", close: "14:30", secondOpen: "18:00", secondClose: "22:30" }, // Tuesday
    3: { open: "11:00", close: "14:30", secondOpen: "18:00", secondClose: "22:30" }, // Wednesday
    4: { open: "11:00", close: "14:30", secondOpen: "18:00", secondClose: "22:30" }, // Thursday
    5: { open: "11:00", close: "13:00", secondOpen: "18:00", secondClose: "23:00" }, // Friday
    6: { open: "18:00", close: "23:00" }, // Saturday
    0: { open: "18:00", close: "23:00" } // Sunday
  };

  const checkOpenStatus = () => {
    // Get current time in UTC+2 (Paris timezone)
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const parisTime = new Date(utc + (2 * 3600000)); // UTC+2
    
    const currentDay = parisTime.getDay();
    const currentTime = parisTime.getHours() * 100 + parisTime.getMinutes();
    
    const todayHours = openingHours[currentDay];
    
    if (!todayHours) {
      setIsOpen(false);
      setCurrentStatus("Fermé");
      return;
    }

    const openTime = parseInt(todayHours.open.replace(":", ""));
    const closeTime = parseInt(todayHours.close.replace(":", ""));
    
    let isCurrentlyOpen = false;
    
    // Check first period
    if (todayHours.secondOpen) {
      // Two periods (lunch and dinner)
      const secondOpenTime = parseInt(todayHours.secondOpen.replace(":", ""));
      const secondCloseTime = parseInt(todayHours.secondClose.replace(":", ""));
      
      isCurrentlyOpen = (currentTime >= openTime && currentTime <= closeTime) ||
                       (currentTime >= secondOpenTime && currentTime <= secondCloseTime);
    } else {
      // Single period
      isCurrentlyOpen = currentTime >= openTime && currentTime <= closeTime;
    }
    
    setIsOpen(isCurrentlyOpen);
    setCurrentStatus(isCurrentlyOpen ? "Ouvert" : "Fermé");
  };

  useEffect(() => {
    checkOpenStatus();
    // Update every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:0164460505";
  };

const handleMaps = () => {
  window.open(
    "https://www.google.com/maps/place/Casa+milano/@48.6849105,2.1873299,3a,75y,152.38h,93.34t/data=!3m7!1e1!3m5!1smwVmT7CtqNn81BGyzg0kow!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.3410712147043427%26panoid%3DmwVmT7CtqNn81BGyzg0kow%26yaw%3D152.38496797615937!7i16384!8i8192!4m6!3m5!1s0x47e5d7b228e06237:0xaf44244756679fc7!8m2!3d48.6847834!4d2.1872281!16s%2Fg%2F11q3zy62mx?entry=ttu",
    "_blank"
  );
};

  const formatHours = (day, hours) => {
    if (hours.secondOpen) {
      return `${hours.open}–${hours.close} • ${hours.secondOpen}–${hours.secondClose}`;
    }
    return `${hours.open}–${hours.close}`;
  };

  const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  return (
    <section id="infos" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            📍 Infos Pratiques
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Toutes les informations pour nous trouver et commander
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Address with Google Maps */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <MapPin className="h-5 w-5 text-orange-500" />
                Adresse & Localisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                17 Avenue de Montjay<br />
                91400 Orsay
              </p>
              
              {/* Google Maps Embed */}
              <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.857829817693!2d2.1872583!3d48.6970017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67f8a5e5f9a89%3A0x1234567890abcdef!2s17%20Avenue%20de%20Montjay%2C%2091400%20Orsay%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Casa Milano Location"
                ></iframe>
              </div>
              
              <Button
                onClick={handleMaps}
                variant="outline"
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ouvrir dans Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Contact & Hours */}
          <div className="space-y-6">
            {/* Phone */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Phone className="h-5 w-5 text-orange-500" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 text-xl font-semibold">
                  01 64 46 05 05
                </p>
                <Button
                  onClick={handleCall}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Appeler maintenant
                </Button>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Clock className="h-5 w-5 text-orange-500" />
                  Horaires - Ouvert 7j/7
                  <span className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${
                    isOpen 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {currentStatus}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {dayNames.map((dayName, index) => {
                    const dayIndex = index; // Sunday = 0, Monday = 1, etc.
                    const hours = openingHours[dayIndex];
                    const today = new Date().getDay();
                    const isToday = dayIndex === today;
                    
                    return (
                      <div 
                        key={dayName}
                        className={`flex justify-between py-1 ${
                          isToday ? "font-semibold text-orange-600 bg-orange-50 px-2 rounded" : "text-gray-700"
                        }`}
                      >
                        <span>{dayName}</span>
                        <span>{hours ? formatHours(dayName, hours) : "Fermé"}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* New Payment & Conditions and Delivery sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment & Conditions */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                <CreditCard className="h-5 w-5 text-orange-500" />
                Paiement & conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">CB acceptée</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ticket className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Tickets restaurant acceptés</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Minimum de commande : 15 €</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="bg-green-500 text-white py-3 px-6 rounded-lg inline-block mb-4">
                  <p className="font-semibold text-lg">🚚 Livraison gratuite 7j/7 à domicile & au bureau</p>
                </div>
                <p className="text-gray-600">
                  Profitez de notre service de livraison gratuit tous les jours de la semaine, 
                  que ce soit à votre domicile ou sur votre lieu de travail.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;