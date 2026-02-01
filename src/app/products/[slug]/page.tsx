import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRelatedProducts } from "./generateStaticParams";
import Link from "next/link";
import { Award, CheckCircle, Hash, Package } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

const certificateImages: Record<string, { name: string; image: string }> = {
  COA: {
    name: "Certificate of Analysis",
    image: "/images/coa-certificate.png",
  },
  GMP: {
    name: "Good Manufacturing Practice",
    image: "/images/gmp-certificate.jpg",
  },
  ISO: {
    name: "International Organization for Standardization",
    image: "/images/iso.avif",
  },
  "Phytosanitary Certificate": {
    name: "Phytosanitary Certificate",
    image: "/images/Phytosanitary Certificate.png",
  },
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // after you already have `product`
  const relatedProducts = getRelatedProducts(product);
  return (
    <main className="bg-white text-gray-800">
      {/* ================= TOP SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 md:pt-36 pt-10 pb-10 grid md:grid-cols-2 gap-8">
        {/* LEFT IMAGE */}
        <div className="border border-gray-700 rounded p-4 flex justify-center items-center relative">
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            className="object-contain w-full h-full"
          />
        </div>

        {/* RIGHT INFO */}
        <div>
          <h1 className="text-4xl font-semibold mb-6">{product.name}</h1>
          {product.hsCode && (
            <p className="text-sm text-gray-600 mb-4">
              HS Code: <span className="font-medium">{product.hsCode}</span>
            </p>
          )}

          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium">Price:</span>
            <button className="text-sm text-[#214d3b] hover:bg-[#214d3b] hover:text-white border border-[#214d3b] px-3 py-1 rounded transition-all duration-300">
              Get Latest Price
            </button>
          </div>

          <p className="text-green-600 text-sm mb-4">● In Stock</p>

          <Link href={`/inquire?product=${encodeURIComponent(product.slug)}`}>
            <button className="bg-[#214d3b] hover:bg-[#f1c46b] text-white px-6 py-2 text-xl font-medium mb-6 rounded transition-all duration-300">
              SEND INQUIRY
            </button>
          </Link>

          {/* PRODUCT SPEC TABLE */}
          <h3 className="font-semibold mb-2 text-xl">Product Specifications</h3>
          <table className="w-full border text-md">
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr key={index} className="border">
                  <td className="p-2 bg-gray-50 font-medium">{spec.label}</td>
                  <td className="p-2">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= PRODUCT OVERVIEW ================= */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h3 className="font-semibold mb-2 text-3xl">Product Overview</h3>
        {product.overview &&
          product.overview.split("\n").map((para, idx) => (
            <p key={idx} className="text-lg leading-relaxed text-gray-700 mb-4">
              {para}
            </p>
          ))}
      </section>

      {/* ================= ADDITIONAL PRODUCT INFORMATION ================= */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="font-semibold mb-6 text-3xl">Additional Product Information</h3>

        <div className="grid md:grid-cols-2 md:gap-8 gap-5">
          {/* Applications */}
          {product.applications && (
            <div className="border rounded-lg p-6 md:col-span-1 col-span-2">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="text-[#214d3b]" />
                Applications
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {product.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Packaging */}
          {product.packaging && (
            <div className="border rounded-lg p-6 md:col-span-1 col-span-2">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Package className="text-[#214d3b]" />
                Packaging
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {product.packaging.map((pack, idx) => (
                  <li key={idx}>{pack}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {product.certifications && (
            <div className="border rounded-lg p-6 col-span-2">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">Certifications</h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {product.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition">
                    <Image
                      src={certificateImages[cert].image}
                      alt={cert}
                      width={80}
                      height={80}
                      className="object-contain mb-2"
                    />
                    <p className="text-sm font-medium">{certificateImages[cert].name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="font-semibold mb-4 text-3xl">Related Products</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {relatedProducts.map((item, i) => (
            <div key={i} className="border border-gray-700 rounded p-3 text-sm flex flex-col">
              <div className="md:h-90 h-44 bg-gray-100 mb-3 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium md:text-xl text-lg">{item?.name}</p>
              <div className="flex-1"></div>
              {/* <p className="text-gray-600">MOQ: {ite}</p> */}
              <Link href={`/products/${item.slug}`}>
                <button className="mt-2 bg-[#214d3b] text-white w-full py-2 md:text-xl text-base rounded cursor-pointer">
                  View Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
