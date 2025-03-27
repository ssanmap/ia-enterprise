import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";
import { About } from "../components/About";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};