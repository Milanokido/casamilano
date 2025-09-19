import React from "react";
import { Card, CardContent } from "./ui/card";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1713761730664-e945ec03c3d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxoYWxhbCUyMHBpenphfGVufDB8fHx8MTc1ODAwODAzOHww&ixlib=rb-4.1.0&q=85",
      alt: "Délicieuse pizza avec garnitures",
      category: "Pizzas"
    },
    {
      src: "https://images.unsplash.com/photo-1608039755401-742074f0548d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd2luZ3N8ZW58MHx8fHwxNzU4MDA4MDUwfDA&ixlib=rb-4.1.0&q=85",
      alt: "Ailes de poulet buffalo",
      category: "Tex-Mex"
    },
    {
      src: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxjaGlja2VuJTIwd2luZ3N8ZW58MHx8fHwxNzU4MDA4MDUwfDA&ixlib=rb-4.1.0&q=85",
      alt: "Ailes de poulet thaï au piment",
      category: "Tex-Mex"
    },
    {
      src: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
      alt: "Poulet frit croustillant",
      category: "Tex-Mex"
    },
    {
      src: "https://images.unsplash.com/photo-1698688334089-c68105801d02?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHx0aXJhbWlzdSUyMGRlc3NlcnR8ZW58MHx8fHwxNzU4MDA4MDU2fDA&ixlib=rb-4.1.0&q=85",
      alt: "Tiramisu élégant",
      category: "Desserts"
    },
    {
      src: "https://images.pexels.com/photos/8522675/pexels-photo-8522675.jpeg",
      alt: "Boissons fraîches",
      category: "Boissons"
    },
    {
      src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZHxlbnwwfHx8fDE3NTgwMDgwNDV8MA&ixlib=rb-4.1.0&q=85",
      alt: "Assortiment de plats du restaurant",
      category: "Spécialités"
    },
    {
      src: "https://images.unsplash.com/photo-1651440204227-a9a5b9d19712?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwZm9vZHxlbnwwfHx8fDE3NTgwMDgwNDV8MA&ixlib=rb-4.1.0&q=85",
      alt: "Table garnie de délicieux plats",
      category: "Ambiance"
    }
  ];

  return (
    <section id="galerie" className="py-16 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            📸 Galerie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos délicieuses spécialités halal en images
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-full mt-1">
                      {image.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
            Toutes nos spécialités sont préparées avec des ingrédients frais et halal
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;