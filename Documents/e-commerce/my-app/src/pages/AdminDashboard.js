import React, { useEffect, useState } from "react";
import instance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    length: "",
    width: "",
    fabric: "",
    color: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin-login");
    }

    const fetchData = async () => {
      try {
        const headers = {
          adminPassword: process.env.REACT_APP_ADMIN_PASSWORD,
        };

        const ordersRes = await instance.get("/orders", { headers });
        const feedbackRes = await instance.get("/feedback", { headers });

        setOrders(ordersRes.data);
        setFeedbacks(feedbackRes.data);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  // Input change handler for product form
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Add product locally
  const addProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      name: "",
      image: "",
      length: "",
      width: "",
      fabric: "",
      color: "",
      description: "",
      price: "",
    });
  };

  // Delete product
  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        Admin Dashboard
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Orders Section */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-500">No orders yet.</p>
          ) : (
            <ul className="space-y-2">
              {orders.map((order) => (
                <li key={order._id} className="border p-3 rounded bg-gray-50">
                  <p><strong>Name:</strong> {order.customerName}</p>
                  <p><strong>Phone:</strong> {order.customerPhone}</p>
                  <p><strong>Payment:</strong> {order.paymentMethod}</p>
                  <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Feedback Section */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Feedback</h2>
          {feedbacks.length === 0 ? (
            <p className="text-gray-500">No feedback yet.</p>
          ) : (
            <ul className="space-y-2">
              {feedbacks.map((fb) => (
                <li key={fb._id} className="border p-3 rounded bg-gray-50">
                  <p><strong>Name:</strong> {fb.customerName}</p>
                  <p><strong>Message:</strong> {fb.message}</p>
                  <p><strong>Date:</strong> {new Date(fb.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Product Management Section */}
      <div className="mt-12 bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Product Management</h2>

        {/* Add Product Form */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" className="p-2 border rounded"/>
          <input type="text" name="image" value={newProduct.image} onChange={handleChange} placeholder="Image URL" className="p-2 border rounded"/>
          <input type="text" name="length" value={newProduct.length} onChange={handleChange} placeholder="Length" className="p-2 border rounded"/>
          <input type="text" name="width" value={newProduct.width} onChange={handleChange} placeholder="Width" className="p-2 border rounded"/>
          <input type="text" name="fabric" value={newProduct.fabric} onChange={handleChange} placeholder="Fabric" className="p-2 border rounded"/>
          <input type="text" name="color" value={newProduct.color} onChange={handleChange} placeholder="Color" className="p-2 border rounded"/>
          <input type="text" name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded"/>
          <textarea name="description" value={newProduct.description} onChange={handleChange} placeholder="Embroidery Description" className="p-2 border rounded col-span-2"></textarea>
        </div>
        <button onClick={addProduct} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
          Add Product
        </button>

        {/* Product List */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Manage Products</h3>
          {products.length === 0 ? (
            <p className="text-gray-500">No products added yet.</p>
          ) : (
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Fabric</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 border">
                      <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover mx-auto"/>
                    </td>
                    <td className="p-2 border">{prod.name}</td>
                    <td className="p-2 border">{prod.fabric}</td>
                    <td className="p-2 border">{prod.price}</td>
                    <td className="p-2 border">
                      <button onClick={() => deleteProduct(index)} className="bg-red-500 text-white px-3 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
