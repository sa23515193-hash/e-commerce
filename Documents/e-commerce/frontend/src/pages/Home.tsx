import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import ZoomModal from "../components/ZoomModal";
import { products as staticProducts } from "../data/products";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";

interface Product {
  _id: string;
  name: string;
  price: number;
  fabric: string;
  size: string;
  embroidery: string;
  stones: string;
  description: string;
  imageUrl: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Load static data first
  useEffect(() => {
    setProducts(staticProducts);
  }, []);

  const handleBuyNow = async (product: Product) => {
    const customerName = prompt("Enter your name:");
    const customerPhone = prompt("Enter your phone number:");
    if (!customerName || !customerPhone) return;

    await axios.post("/orders", {
      productId: product._id,
      customerName,
      customerPhone,
      paymentMethod: "EasyPaisa",
    });

    alert("Order placed! Redirecting to payment...");
    window.open("https://www.easypaisa.com.pk/", "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/hero.jpg"
          alt="Handmade Embroidery"
          className="w-full h-96 object-cover brightness-90"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Luxury Handmade Embroidery
          </h1>
          <p className="text-xl mb-4 drop-shadow-md">
            Exquisite designs. Trusted platform. Guaranteed quality.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product: Product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 cursor-pointer rounded"
                onClick={() => setZoomImage(product.imageUrl)}
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">
                {product.fabric}, {product.size}, {product.embroidery}
              </p>
              <p className="text-gray-800 font-bold">${product.price}</p>
              <button
                onClick={() => handleBuyNow(product)}
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <div className="text-right mt-4">
          <a href="/products" className="text-blue-600 hover:underline">
            View All Products →
          </a>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <FeedbackForm />

      {zoomImage && (
        <ZoomModal imageUrl={zoomImage} onClose={() => setZoomImage(null)} />
      )}

      <Footer />
    </div>
  );
};

export default Home;