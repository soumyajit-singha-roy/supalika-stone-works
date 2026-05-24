import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Industries Served | Supalika Stone Works",
  description: "Discover the industries that rely on our premium aggregate solutions.",
};

export default function IndustriesPage() {
  return (
    <main className="pt-20">
      <Industries />
      <WhyChooseUs />
    </main>
  );
}
