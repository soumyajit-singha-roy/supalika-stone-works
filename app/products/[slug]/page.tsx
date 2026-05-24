import { PRODUCTS } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} | Supalika Stone Works`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy-800 pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover img-industrial"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full">
          <span className="inline-block bg-gold/90 text-navy-800 px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-wider mb-6">
            {product.category}
          </span>
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-none">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 lg:gap-24">
          
          {/* Left Column - Details */}
          <div>
            <h2 className="font-bebas text-3xl text-gold mb-6">Product Overview</h2>
            <p className="font-inter text-lg text-white/70 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 mb-10">
              <h3 className="font-inter font-semibold text-white mb-6 uppercase tracking-wider text-sm">Key Specifications & Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white/60 font-inter">Manufactured using advanced 2-stage crushing systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white/60 font-inter">Stringent quality control and IS code compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white/60 font-inter">High volume availability from our 250 TPH plant.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-gold flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-white/60 font-inter">GPS-tracked fleet for reliable on-time delivery across Eastern India.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="lg:-mt-32 relative z-20">
            <div className="glass-card p-8 md:p-10 sticky top-32 border border-gold/20">
              <h3 className="font-bebas text-4xl text-white mb-2">Interested in this product?</h3>
              <p className="font-inter text-white/60 text-sm mb-8">
                Request a quote or technical specifications for our {product.name}. Our sales team typically responds within 2 hours.
              </p>
              
              <Link
                href="/contact"
                className="block w-full text-center bg-gold-gradient text-navy-800 font-semibold text-[13px] px-8 py-4 rounded-sm hover:scale-[1.02] transition-transform uppercase tracking-wide mb-4"
              >
                Inquire Now
              </Link>
              <Link
                href="/products"
                className="block w-full text-center border border-white/20 text-white font-semibold text-[13px] px-8 py-4 rounded-sm hover:bg-white/5 transition-colors uppercase tracking-wide"
              >
                View All Products
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
