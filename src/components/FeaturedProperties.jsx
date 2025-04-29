import React, { useState } from 'react'
import properties from '../properties'  // Assuming you have an array of properties
import { FaHeart } from "react-icons/fa";
import { FaBath, FaLocationDot, FaRuler, FaBed } from "react-icons/fa6";
import PropertyModal from './PropertyModal'; // Importing the modal component to display property details

const FeaturedProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null); // State to manage selected property for the modal

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div key={index}
            className="bg-white rounded-2xl drop-shadow-2xl overflow-hidden
            hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative
            group cursor-pointer"
            onClick={() => setSelectedProperty(property)} // Shows the modal on property click
          >
            <div className="relative">
              <img src={property.Images[0]} alt={property.title} className="w-full h-72 object-cover 
              group-hover:scale-105 transition-transform duration-300" />
              <button className="absolute top-4 right-4 p-2 rounded-full
              bg-white/70 hover:bg-white transition-colors duration-200">
                <FaHeart className="text-gray-600 hover:text-red-500
                transition-colors duration-200" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <FaLocationDot className="text-blue-600" />
                <span>{property.location}</span>
              </div>

              <div className="text-2xl font-bold text-blue-600 mb-2">
                {property.price}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">{property.title}</h3>

              <div className="flex justify-between items-center p-3
              bg-blue-50 rounded-lg">

                <div className="flex items-center gap-2">
                  <FaBed className="text-blue-600" />
                  <span className="text-gray-600">{property.bedrooms} Beds </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaBath className="text-blue-600" />
                  <span className="text-gray-600">{property.bathrooms} Baths </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaRuler className="text-blue-600" />
                  <span className="text-gray-600">{property.sqft} sqft </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render the modal if a property is selected */}
      {selectedProperty && (
        <PropertyModal 
          onclose={() => setSelectedProperty(null)} // Close the modal when clicked
          property={selectedProperty} // Pass selected property details to modal
        />
      )}
    </section>
  )
}

export default FeaturedProperties;
