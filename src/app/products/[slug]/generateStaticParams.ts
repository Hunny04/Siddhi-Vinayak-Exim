import { products, Product } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export function getRelatedProducts(currentProduct: Product, limit = 4): Product[] {
  return products.filter((i) => i.slug !== currentProduct.slug).slice(0, limit);
}
