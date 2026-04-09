import Navbar from "../components/01_Navbar/navbar";
import Hero from "../components/02_Hero/Hero";
import Programs from "../components/03_Programs/Programs";
import Features from "../components/04_Features/Features";
import Pricing from "../components/05_Pricing/Pricing";
import Trainers from "../components/06_Trainers/Trainers";
import Footer from "../components/07_Footer/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Features />
      <Pricing />
      <Trainers />
      <Footer />
    </>
  )
}

export default Home; 