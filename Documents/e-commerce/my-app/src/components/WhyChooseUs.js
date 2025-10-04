import React from "react";

const points = [
  "Full handmade embroidery",
  "Trustworthy platform",
  "Best services at exact time",
  "Guaranteed quality",
];

const WhyChooseUs = () => {
  return (
    <div className="my-12 p-6 bg-gradient-to-r from-pink-100 to-yellow-100 rounded shadow">
     <h2 className="text-5xl font-extrabold mb-8 text-center text-purple-900 drop-shadow-lg">
  Why Choose Us
</h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {points.map((point, i) => (
        <li key={i} className="text-xl font-medium text-gray-800">
  {point}
</li>

        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
