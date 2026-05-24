import ProcessFlow from "@/components/ProcessFlow";
import Infrastructure from "@/components/Infrastructure";

export const metadata = {
  title: "Process & Infrastructure | Supalika Stone Works",
  description: "Learn about our advanced 250 TPH crushing plant and quality control process.",
};

export default function ProcessPage() {
  return (
    <main className="pt-20">
      <ProcessFlow />
      <Infrastructure />
    </main>
  );
}
