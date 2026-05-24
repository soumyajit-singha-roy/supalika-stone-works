import Products from "@/components/Products";

export const metadata = {
  title: "Products | Supalika Stone Works",
  description: "Explore our premium range of stone aggregates and railway ballast.",
};

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <Products />
    </main>
  );
}
