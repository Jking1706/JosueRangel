export function getHomeHash() {
  return "#/";
}

export function getCatalogHash() {
  return "#/catalogo";
}

export function getProductHash(id) {
  return `#/producto/${id}`;
}

export function parseRouteHash(hash) {
  if (!hash || hash === "#" || hash === "#/" ) {
    return { type: "home" };
  }

  if (/^#\/catalogo\/?$/.test(hash)) {
    return { type: "catalog" };
  }

  const match = hash.match(/^#\/producto\/(\d+)$/);
  if (match) {
    return { type: "product", id: Number(match[1]) };
  }

  return { type: "home" };
}
