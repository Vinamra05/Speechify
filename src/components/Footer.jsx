import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-600 to-pink-700 text-white py-4 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-semibold">
          Made by Vinamra with 💟
        </p>
        <p className="text-sm mt-1">
          &copy; {new Date().getFullYear()} Speechify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
