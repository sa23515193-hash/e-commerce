import React from "react";

const testimonials = [
  { name: "Sara", comment: "Amazing platform! Best handmade embroidery." },
  { name: "Ali", comment: "High quality and on-time delivery." },
  { name: "Fatima", comment: "Beautiful products, very satisfied!" },
  { name: "Zain", comment: "Trustworthy and professional service." },
];

const Testimonials: React.FC = () => {
  return (
    <div className="my-12 bg-gray-100 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="border p-4 rounded bg-white">
            <p>"{t.comment}"</p>
            <p className="mt-2 font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;