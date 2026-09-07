import { useEffect, useMemo, useState } from "react";
import products from "./data/products.js";
import CatalogPage from "./components/CatalogPage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import { getCatalogHash, getHomeHash, getProductHash, parseRouteHash } from "./utils/routes.js";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [route, setRoute] = useState(() => parseRouteHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(parseRouteHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const selectedProduct =
    route.type === "product" ? products.find((p) => p.id === route.id) : null;

  const openProduct = (id) => {
    window.location.hash = getProductHash(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCatalog = () => {
    window.location.hash = getCatalogHash();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const relatedProducts = selectedProduct
    ? products.filter(
        (product) => product.category === selectedProduct.category && product.id !== selectedProduct.id
      )
    : [];

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white text-ink">
        <Header actionLabel="Inicio" actionHref={getHomeHash()} />
        <ProductDetail
          product={selectedProduct}
          relatedProducts={relatedProducts.slice(0, 3)}
          onBack={openCatalog}
          onOpenProduct={openProduct}
        />
        <Footer />
      </div>
    );
  }

  if (route.type === "catalog") {
    return (
      <CatalogPage
        products={products}
        filteredProducts={filteredProducts}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onOpenProduct={openProduct}
      />
    );
  }

  return (
    <LandingPage />
  );
}
