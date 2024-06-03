import About from "@/components/About";
import Content from "@/components/Content";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import  Contact  from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-[85%] mx-auto">
      <Nav/>
      <Hero/>
      <Features/>
      <Content/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}
