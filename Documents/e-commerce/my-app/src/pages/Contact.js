import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="bg-white shadow-xl rounded-lg p-10 max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Contact Us
        </h1>
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong>📞 Mobile:</strong> +92 320 3765060
          </p>
          <p>
            <strong>📧 Email:</strong> masifmarkand1122@gmail.com
          </p>
          <p>
            <strong>📍 Address:</strong> Basti Markand, Post Office Khas Fatehpur
            Janobi 1, Tehsil Ali Pur, District Muzaffargarh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
