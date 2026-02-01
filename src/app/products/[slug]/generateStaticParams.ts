import { products, Product } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export function getRelatedProducts(currentProduct: Product, limit = 4): Product[] {
  // randomly select products excluding the current one
  return products
    .filter((i) => i.slug !== currentProduct.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}
