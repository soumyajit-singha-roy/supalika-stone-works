import ApplicationForm from "@/components/ApplicationForm";

export const metadata = {
  title: "Apply Now | Supalika Stone Works",
  description: "Apply for open positions at Supalika Stone Works.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-navy-800 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80')] bg-cover opacity-5 mix-blend-overlay pointer-events-none" />
      <ApplicationForm />
    </main>
  );
}
