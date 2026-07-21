import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import Footer from "@/components/layout/footer";
import Collections from "@/components/home/Collections";
import Featured from "@/components/home/Featured";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Collections />
        <Featured />
        <WhyUs />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
    </>
  );
}