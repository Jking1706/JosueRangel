import { useMemo, useState } from "react";
import products from "./data/products.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SwipeHint from "./components/SwipeHint.jsx";
import ProductCarousel from "./components/ProductCarousel.jsx";
import QuickAccess from "./components/QuickAccess.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />

      <Hero
        products={products}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <SwipeHint />

      <ProductCarousel products={filteredProducts} activeCategory={activeCategory} />

      <QuickAccess
        products={products}
        onSelect={() => {
          // Al hacer clic en un acceso rápido, aseguramos ver todas las
          // categorías para que el producto elegido sea visible en el carrusel.
          setActiveCategory("Todos");
        }}
      />

      <Footer />
    </div>
  );
}
