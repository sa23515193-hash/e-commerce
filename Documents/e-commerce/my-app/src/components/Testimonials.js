import React from "react";

const testimonials = [
  { name: "Sara", comment: "Amazing platform! Best handmade embroidery." },
  { name: "Ali", comment: "High quality and on-time delivery." },
  { name: "Fatima", comment: "Beautiful products, very satisfied!" },
  { name: "Zain", comment: "Trustworthy and professional service." },
];

const Testimonials = () => {
  return (
    <div className="my-12 bg-gray-100 p-6 rounded shadow">
   <h2 className="text-5xl font-extrabold mb-8 text-center text-blue-900 drop-shadow-lg">
  Testimonials
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="border p-6 rounded bg-white shadow hover:shadow-lg transition">
            <p className="text-xl text-gray-700 italic">"{t.comment}"</p>
            <p className="mt-3 font-semibold text-blue-800">- {t.name}</p>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

