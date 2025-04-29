import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, } from 'react-icons/fa6'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
        <h3 className="text-xl font-bold mb-4">Real Estate Co.</h3>
          <p className="text-gray-400">Your trusted partner in finding the perfect home.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
           <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
           <li><a href="/about" className="hover:text-white transition-colors duration-200">About Us</a></li>
           <li><a href="/properties" className="hover:text-white transition-colors duration-200">FeaturedProperties</a></li>
           <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
</ul>

        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Info</h4>
          <ul>
            <li>WestLand</li>
            <li>EastLand</li>
            <li><a href="contact@realestate.com" className="text-gray-400 hover:text-white transition-colors duration-200 underline">
    contact@realestate.com
  </a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>

          <div className="flex space-x-4">
            <a href="#">
              <FaFacebook className="text-gray-400 hover:text-white transition-colors duration-200 
            text-2xl cursor-pointer" />
            </a>

             <a href="#">
              <FaTwitter className="text-gray-400 hover:text-white transition-colors duration-200 
            text-2xl cursor-pointer" />
            </a>

             <a href="#">
              <FaInstagram className="text-gray-400 hover:text-white transition-colors duration-200 
            text-2xl cursor-pointer" />
            </a>

             <a href="#">
              <FaLinkedin className="text-gray-400 hover:text-white transition-colors duration-200 
            text-2xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer