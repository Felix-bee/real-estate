import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaX, FaHeart, FaLocationDot, FaBed, FaBath, FaRuler } from 'react-icons/fa6';

const PropertyModal = ({ onclose, property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setFavorite] = useState(false);
  const images = property.Images || [];
  const [showContact, setShowContact] = useState(false);


  // Next and previous image handlers
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onclose}>
      <div className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>

        <div className="relative h-[300px] md:h-[400px]">
          <img src={images[currentImageIndex]} alt="Property" className="w-full h-full object-cover" />

          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
            <FaChevronLeft size={20} />
          </button>

          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
            <FaChevronRight size={20} />
          </button>

          <button onClick={onclose} className="absolute text-white top-10 right-5 -translate-y-1/2 bg-red-500 p-2 rounded-full">
            <FaX size={20} />
          </button>

          <div className="absolute bottom-4 right-4 flex items-center gap-4">
            <button onClick={() => setFavorite(!isFavorite)} className={`bg-white/80 p-2 rounded-full ${isFavorite ? "text-red-500" : "text-gray-500"}`}>
              <FaHeart size={20} />
            </button>

            <div className="bg-black/50 text-white px-3 py-1 rounded-full">
              {currentImageIndex + 1}/{images.length}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-baseline gap-2 text-gray-500 text-sm mb-3">
            <FaLocationDot className="text-blue-600" />
            <span>{property.location}</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {property.title}
          </h2>
          <div className="text-3xl font-bold text-blue-800 mb-4">
            {property.price}
          </div>

          <div className="flex gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FaBed className="text-blue-600" />
              <span className="text-gray-600">{property.bedrooms} Beds</span>
            </div>

            <div className="flex items-center gap-2">
              <FaBath className="text-blue-600" />
              <span className="text-gray-600">{property.bathrooms} Baths</span>
            </div>

            <div className="flex items-center gap-2">
              <FaRuler className="text-blue-600" />
              <span className="text-gray-600">{property.sqft} sqft</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{property.description}</p>
          </div>

          {!showContact ? (
  <button
    onClick={() => setShowContact(true)}
    className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
  >
    Contact Agent
  </button>
) : (
  <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-blue-800 space-y-2 text-left">
    <div>
      <span className="font-semibold">Email: </span>
      <a
        href={`mailto:${property.agentEmail || 'agent@example.com'}`}
        className="text-blue-700 underline hover:text-blue-900"
      >
        {property.agentEmail || 'agent@example.com'}
      </a>
    </div>
    <div>
      <span className="font-semibold">Phone: </span>
      <a
        href={`tel:${property.agentPhone || '+1234567890'}`}
        className="text-blue-700 underline hover:text-blue-900"
      >
        {property.agentPhone || '+123-456-7890'}
      </a>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
