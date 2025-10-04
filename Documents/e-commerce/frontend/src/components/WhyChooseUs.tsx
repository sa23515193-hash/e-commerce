import React from "react";

const points = [
  "Full handmade embroidery",
  "Trustworthy platform",
  "Best services at exact time",
  "Guaranteed quality",
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="my-12 p-6 bg-gradient-to-r from-pink-100 to-yellow-100 rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {points.map((point, i) => (
          <li key={i} className="text-lg">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;