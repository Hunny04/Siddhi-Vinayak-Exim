import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= HEADER ================= */}
      <section className="bg-[#214d3b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Our Products</h1>
          <p className="text-sm md:text-base opacity-90">Premium Herbal & Natural Products for Export</p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              {/* IMAGE */}
              <div className="h-56 bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col h-[calc(100%-224px)]">
                <h3 className="text-xl font-semibold mb-1">{product.name}</h3>

                <p className="text-sm text-gray-600 mb-2">{product.tagline}</p>

                {product.hsCode && (
                  <p className="text-xs text-gray-500 mb-3">
                    HS Code: <span className="font-medium">{product.hsCode}</span>
                  </p>
                )}
                <div className="flex-1"></div>

                {/* ACTIONS */}
                <div className="flex gap-2">
                  <Link href={`/products/${product.slug}`} className="flex-1">
                    <button className="w-full border border-[#214d3b] text-[#214d3b] py-2 rounded hover:bg-[#214d3b] hover:text-white transition cursor-pointer">
                      View Details
                    </button>
                  </Link>

                  <Link href={`/inquire?product=${product.slug}`} className="flex-1">
                    <button className="w-full bg-[#214d3b] text-white py-2 rounded hover:bg-[#183a2c] transition cursor-pointer">
                      Inquiry
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
