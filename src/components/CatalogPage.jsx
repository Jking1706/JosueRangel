import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import SwipeHint from "./SwipeHint.jsx";
import ProductCarousel from "./ProductCarousel.jsx";
import QuickAccess from "./QuickAccess.jsx";
import Footer from "./Footer.jsx";
import { getHomeHash } from "../utils/routes.js";

export default function CatalogPage({
  products,
  filteredProducts,
  activeCategory,
  onCategoryChange,
  onOpenProduct,
}) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header actionLabel="Inicio" actionHref={getHomeHash()} />

      <Hero
        products={products}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <SwipeHint />

      <ProductCarousel
        products={filteredProducts}
        activeCategory={activeCategory}
        onOpenProduct={onOpenProduct}
      />

      <QuickAccess products={products} onSelect={onOpenProduct} />

      <Footer />
    </div>
  );
}
