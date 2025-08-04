import Layout from "./Components/Layout";
import ContactSection from "./Components/ContactSection";
import FeaturesSection from "./Components/FeaturesSection";
import HeroSection from "./Components/HeroSection";

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
    </Layout>
  );
};

export default App;
