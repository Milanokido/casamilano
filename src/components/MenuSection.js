import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const MenuSection = () => {
  const menuData = {
    menusspeciaux: {
      title: "Menus spéciaux",
      emoji: "🍽️",
      items: [
        {
          name: "Menu Trio",
          description: "3 pizzas Junior + 1 Maxi Coca",
          price: "27 €"
        },
        {
          name: "Menu Régal", 
          description: "3 pizzas Senior + 1 Maxi Coca",
          price: "35 €"
        },
        {
          name: "Menu Big",
          description: "3 pizzas Méga + 1 Maxi Coca", 
          price: "45 €"
        },
        {
          name: "Menu Midi",
          description: "1 pizza Junior OU 1 sandwich OU 1 Tex-Mex (8 pièces) + 1 dessert (sauf glace) + 1 boisson 33cl",
          subtitle: "Sur place, du lundi au vendredi",
          price: "12 €"
        }
      ]
    },
    pizzasTomate: {
      title: "Pizzas - Base Tomate",
      emoji: "🍕",
      items: [
        {
          name: "Margherita",
          description: "Tomate, fromage, origan", 
          prices: { junior: "7,50 €", senior: "12,00 €", mega: "16,00 €" }
        },
        {
          name: "Regina",
          description: "Tomate, fromage, jambon*, champignons",
          prices: { junior: "9,50 €", senior: "15,00 €", mega: "20,00 €" }
        },
        {
          name: "Paysanne", 
          description: "Tomate, fromage, lardons*, œuf",
          prices: { junior: "9,50 €", senior: "15,00 €", mega: "20,00 €" }
        },
        {
          name: "Napolitaine",
          description: "Tomate, fromage, anchois, câpres, olives", 
          prices: { junior: "9,50 €", senior: "15,00 €", mega: "20,00 €" }
        },
        {
          name: "Campione",
          description: "Tomate, fromage, viande hachée, champignons",
          prices: { junior: "9,50 €", senior: "15,00 €", mega: "20,00 €" }
        },
        {
          name: "Calzone",
          description: "Tomate, fromage, jambon*, œuf",
          prices: { junior: "9,50 €", senior: "15,00 €", mega: "20,00 €" }
        },
        {
          name: "Végétarienne",
          description: "Tomate, fromage, champignons, poivrons, oignons, artichauts, tomates fraîches",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Neptune",
          description: "Tomate, fromage, thon, poivrons, oignons, olives, œuf",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "4 Saisons",
          description: "Tomate, fromage, jambon*, champignons, artichauts, olives",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Orientale",
          description: "Tomate, fromage, merguez, poivrons, oignons, olives",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Mexicaine",
          description: "Tomate, fromage, viande hachée, poivrons",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Americano",
          description: "Tomate, fromage, viande hachée, chorizo*, oignons doux, œuf",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Texas",
          description: "Tomate, fromage, poulet, pommes de terre, poivrons, œuf",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Hawaïenne",
          description: "Tomate, fromage, poulet, ananas",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Sicilienne",
          description: "Tomate, fromage, thon, anchois, tomates fraîches",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Palermo",
          description: "Tomate, fromage, jambon*, champignons, poivrons",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Del Grec",
          description: "Tomate, fromage, viande de kebab, oignons, tomates fraîches",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Carnivore",
          description: "Tomate, fromage, poulet, boulettes de viande, merguez, barbecue",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        },
        {
          name: "Barbecue",
          description: "Sauce barbecue, fromage, merguez, viande hachée, oignons, pommes de terre",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        },
        {
          name: "3 Jambons",
          description: "Tomate, fromage, jambon*, chorizo*, lardons*",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        },
        {
          name: "Pescatori",
          description: "Tomate, fromage, fruits de mer",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        },
        {
          name: "4 Fromages",
          description: "Tomate, fromage, brie, chèvre, bleu d'Auvergne, parmesan",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        },
        {
          name: "Saint Pietro",
          description: "Tomate, fromage, jambon*, chorizo*, champignons, œuf",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        }
      ]
    },
    pizzasCreme: {
      title: "Pizzas - Base Crème Fraîche",
      emoji: "🍕",
      items: [
        {
          name: "Charentaise",
          description: "Crème fraîche, fromage, poulet, pommes de terre",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Savoyarde",
          description: "Crème fraîche, fromage, jambon*, pommes de terre, oignons, œuf",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Parmentiere",
          description: "Crème fraîche, fromage, viande hachée, pommes de terre, oignons",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Tartiflette",
          description: "Crème fraîche, fromage, lardons*, reblochon, pommes de terre, oignons",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Boursin",
          description: "Crème fraîche, fromage, viande hachée, boursin, oignons",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Chèvre Miel",
          description: "Crème fraîche, fromage, chèvre, miel",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Raclette",
          description: "Crème fraîche, fromage, jambon*, pommes de terre, raclette",
          prices: { junior: "10,00 €", senior: "16,00 €", mega: "21,00 €" }
        },
        {
          name: "Sardenia",
          description: "Crème fraîche, fromage, bleu d'Auvergne, chèvre, brie, parmesan",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        },
        {
          name: "Venezia",
          description: "Crème fraîche, fromage, saumon fumé, citron",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        },
        {
          name: "Cannibale",
          description: "Crème fraîche, fromage, viande hachée, jambon*, merguez, lardons*, œuf",
          prices: { junior: "10,50 €", senior: "17,00 €", mega: "22,00 €" }
        }
      ]
    },
    sandwichs: {
      title: "Sandwichs",
      subtitle: "avec frites + 1 boisson 33cl",
      emoji: "🥪",
      items: [
        { name: "Kebab", price: "9,50 €" },
        { name: "Américain", price: "9,50 €" },
        { name: "Chicken", price: "9,50 €" },
        { name: "Cordon bleu", price: "9,50 €" }
      ]
    },
    tacos: {
      title: "Tacos",
      subtitle: "sauce fromagère, frites à l'intérieur + 1 boisson 33cl",
      emoji: "🌮",
      items: [
        { 
          name: "Simple (1 viande)", 
          price: "9,00 €",
          description: "Viandes : cordon bleu, nuggets, poulet, viande hachée, kebab, tenders"
        },
        { 
          name: "Double (2 viandes)", 
          price: "11,00 €",
          description: "Viandes : cordon bleu, nuggets, poulet, viande hachée, kebab, tenders"
        },
        { 
          name: "Triple (3 viandes)", 
          price: "13,00 €",
          description: "Viandes : cordon bleu, nuggets, poulet, viande hachée, kebab, tenders"
        }
      ]
    },
    texmex: {
      title: "Tex-Mex",
      subtitle: "+ potatoes ou frites",
      emoji: "🍗",
      items: [
        {
          name: "Wings",
          prices: { "5 pcs": "6,00 €", "8 pcs": "9,00 €", "10 pcs": "12,00 €" }
        },
        {
          name: "Nuggets",
          prices: { "5 pcs": "6,00 €", "8 pcs": "9,00 €", "10 pcs": "12,00 €" }
        },
        {
          name: "Tenders",
          prices: { "5 pcs": "6,00 €", "8 pcs": "9,00 €", "10 pcs": "12,00 €" }
        }
      ]
    },
    desserts: {
      title: "Desserts",
      emoji: "🍰",
      items: [
        { name: "Brownie", price: "2,50 €" },
        { name: "Tarte poires", price: "3,00 €" },
        { name: "Tarte pommes", price: "3,00 €" },
        { name: "Tarte citron", price: "3,00 €" },
        { name: "Tarte au Daim", price: "3,50 €" },
        { name: "Tiramisu", price: "3,50 €" }
      ]
    },
    glaces: {
      title: "Glaces",
      emoji: "🍦",
      items: [
        {
          name: "Häagen-Dazs",
          prices: { "100ml": "3,50 €", "500ml": "7,00 €" },
          description: "Parfums non garantis"
        }
      ]
    },
    boissons: {
      title: "Boissons", 
      emoji: "🥤",
      items: [
        { name: "Boisson 33cl (Coca, Coca Zéro, Fanta, Oasis, Orangina)", price: "1,80 €" },
        { name: "Eau 50cl", price: "1,20 €" },
        { name: "Maxi bouteille 1,5L (Coca, Fanta)", price: "3,00 €" },
        { name: "Oasis 2L", price: "3,50 €" }
      ]
    }
  };

  const renderMenuSpecialItem = (item) => (
    <Card key={item.name} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-gray-800 text-lg">{item.name}</h4>
          <Badge className="bg-orange-500 text-white text-base px-3 py-1">
            {item.price}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        {item.subtitle && (
          <p className="text-xs text-orange-600 font-medium italic">{item.subtitle}</p>
        )}
      </CardContent>
    </Card>
  );

  const renderPizzaItem = (item) => (
    <Card key={item.name} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
        </div>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            J: {item.prices.junior}
          </Badge>
          <Badge variant="outline" className="text-xs">
            S: {item.prices.senior}
          </Badge>
          <Badge variant="outline" className="text-xs">
            M: {item.prices.mega}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  const renderSimpleItem = (item) => (
    <Card key={item.name} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <Badge className="bg-orange-500 text-white">
            {item.price}
          </Badge>
        </div>
        {item.description && (
          <p className="text-xs text-gray-600 italic">{item.description}</p>
        )}
      </CardContent>
    </Card>
  );

  const renderTexMexItem = (item) => (
    <Card key={item.name} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h4 className="font-semibold text-gray-800 mb-3">{item.name}</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(item.prices).map(([size, price]) => (
            <Badge key={size} variant="outline" className="text-xs">
              {size}: {price}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderGlaceItem = (item) => (
    <Card key={item.name} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h4 className="font-semibold text-gray-800 mb-3">{item.name}</h4>
        <div className="flex flex-wrap gap-2 mb-2">
          {Object.entries(item.prices).map(([size, price]) => (
            <Badge key={size} variant="outline" className="text-xs">
              {size}: {price}
            </Badge>
          ))}
        </div>
        {item.description && (
          <p className="text-xs text-gray-600 italic">{item.description}</p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="menu" className="py-16 px-4 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            🍽️ Notre Menu Complet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez toutes nos spécialités halal préparées avec soin
          </p>
        </div>

        <Tabs defaultValue="menusspeciaux" className="w-full">
          {/* Desktop TabsList */}
          <div className="mb-8">
            <TabsList className="hidden lg:grid lg:grid-cols-8 lg:w-full">
              <TabsTrigger value="menusspeciaux" className="text-xs sm:text-sm">Menus spéciaux</TabsTrigger>
              <TabsTrigger value="pizzasTomate" className="text-xs sm:text-sm">Pizzas Tomate</TabsTrigger>
              <TabsTrigger value="pizzasCreme" className="text-xs sm:text-sm">Pizzas Crème</TabsTrigger>
              <TabsTrigger value="sandwichs" className="text-xs sm:text-sm">Sandwichs</TabsTrigger>
              <TabsTrigger value="tacos" className="text-xs sm:text-sm">Tacos</TabsTrigger>
              <TabsTrigger value="texmex" className="text-xs sm:text-sm">Tex-Mex</TabsTrigger>
              <TabsTrigger value="desserts" className="text-xs sm:text-sm">Desserts</TabsTrigger>
              <TabsTrigger value="boissons" className="text-xs sm:text-sm">Boissons</TabsTrigger>
            </TabsList>

            {/* Mobile: Horizontal Scrollable Tabs */}
            <div className="lg:hidden">
              <div className="overflow-x-auto scrollbar-hide">
                <TabsList className="inline-flex w-max min-w-full px-1">
                  <TabsTrigger 
                    value="menusspeciaux" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🍽️</span> Menus spéciaux
                  </TabsTrigger>
                  <TabsTrigger 
                    value="pizzasTomate" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🍕</span> Pizzas Tomate
                  </TabsTrigger>
                  <TabsTrigger 
                    value="pizzasCreme" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🍕</span> Pizzas Crème
                  </TabsTrigger>
                  <TabsTrigger 
                    value="sandwichs" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🥪</span> Sandwichs
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tacos" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🌮</span> Tacos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="texmex" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🍗</span> Tex-Mex
                  </TabsTrigger>
                  <TabsTrigger 
                    value="desserts" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🍰</span> Desserts
                  </TabsTrigger>
                  <TabsTrigger 
                    value="boissons" 
                    className="text-xs whitespace-nowrap px-3 py-2 flex-shrink-0"
                  >
                    <span className="text-lg mr-1">🥤</span> Boissons
                  </TabsTrigger>
                </TabsList>
              </div>
              {/* Scroll Indicator */}
              <p className="text-center text-xs text-gray-500 mt-2">
                ← Faites glisser pour voir toutes les catégories →
              </p>
            </div>
          </div>

          {/* Menus spéciaux */}
          <TabsContent value="menusspeciaux">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.menusspeciaux.emoji}</span> 
                <span className="text-2xl">{menuData.menusspeciaux.title}</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.menusspeciaux.items.map(renderMenuSpecialItem)}
            </div>
          </TabsContent>

          {/* Pizzas Tomate */}
          <TabsContent value="pizzasTomate">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.pizzasTomate.emoji}</span>
                <span className="text-2xl">{menuData.pizzasTomate.title}</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuData.pizzasTomate.items.map(renderPizzaItem)}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">* = halal | J = Junior | S = Senior | M = Méga</p>
            </div>
          </TabsContent>

          {/* Pizzas Crème */}
          <TabsContent value="pizzasCreme">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.pizzasCreme.emoji}</span>
                <span className="text-2xl">{menuData.pizzasCreme.title}</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuData.pizzasCreme.items.map(renderPizzaItem)}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">* = halal | J = Junior | S = Senior | M = Méga</p>
            </div>
          </TabsContent>

          {/* Sandwichs */}
          <TabsContent value="sandwichs">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.sandwichs.emoji}</span>
                <span className="text-2xl">{menuData.sandwichs.title}</span>
              </h3>
              <p className="text-gray-600 italic text-lg">{menuData.sandwichs.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData.sandwichs.items.map(renderSimpleItem)}
            </div>
          </TabsContent>

          {/* Tacos */}
          <TabsContent value="tacos">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.tacos.emoji}</span>
                <span className="text-2xl">{menuData.tacos.title}</span>
              </h3>
              <p className="text-gray-600 italic text-lg">{menuData.tacos.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {menuData.tacos.items.map(renderSimpleItem)}
            </div>
          </TabsContent>

          {/* Tex-Mex */}
          <TabsContent value="texmex">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.texmex.emoji}</span>
                <span className="text-2xl">{menuData.texmex.title}</span>
              </h3>
              <p className="text-gray-600 italic text-lg">{menuData.texmex.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {menuData.texmex.items.map(renderTexMexItem)}
            </div>
          </TabsContent>

          {/* Desserts */}
          <TabsContent value="desserts">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.desserts.emoji}</span>
                <span className="text-2xl">{menuData.desserts.title}</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuData.desserts.items.map(renderSimpleItem)}
            </div>
            
            {/* Glaces séparées */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-800 flex items-center gap-3 mb-4">
                <span className="text-2xl">🍦</span>
                <span>Glaces</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuData.glaces.items.map(renderGlaceItem)}
              </div>
            </div>
          </TabsContent>

          {/* Boissons */}
          <TabsContent value="boissons">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-2">
                <span className="text-3xl">{menuData.boissons.emoji}</span>
                <span className="text-2xl">{menuData.boissons.title}</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.boissons.items.map(renderSimpleItem)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;