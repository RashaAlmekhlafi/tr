import Navbar from "../components/Navbar";
import Aboutus from "../pages/sections/Aboutus";
import Services from "../pages/sections/Services";
import Contact from "../pages/sections/Contact";
import '@/styles/globals.css';

export default function Home() {
  return (
    <div dir="rtl">
      <Navbar />
      
      <main>
        <Aboutus />
        <Services />
        <Contact />
      </main>
    </div>
  );
}