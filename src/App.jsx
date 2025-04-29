import PropertyModal from "./components/PropertyModal.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import React, { useState } from "react";

function App() {

  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div className="min-h-screen w-full bg-white">
      <Home />

      <FeaturedProperties setSelectedProperty={setSelectedProperty} />

      <Contact />

      <Footer />

      {selectedProperty && (
        <PropertyModal selectedProperty={[selectedProperty]} onclose={() => setSelectedProperty(null)} />
      )} 
      {/* conditional statement */}
    </div>
  );
}

export default App
