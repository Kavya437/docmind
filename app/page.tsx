import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import UploadCard from "@/components/UploadCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <div className="flex flex-col gap-8 md:gap-12 w-full">
        <HowItWorks />
        <UploadCard />
      </div>
      <Footer />
    </main>
  );
}