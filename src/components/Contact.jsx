import React, { useState } from 'react';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="bg-blue-600 text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find your Home?</h2>
        <p className="mb-8">Contact our real estate experts today</p>
        <button
          onClick={toggleForm}
          className="bg-white text-blue-600 px-8 py-3 rounded-3xl font-semibold hover:bg-blue-50 transition-colors"
        >
          Contact Us
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black"
              onClick={toggleForm}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded px-4 py-2"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
