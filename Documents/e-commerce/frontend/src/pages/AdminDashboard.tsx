import React, { useEffect, useState } from "react";
import instance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

interface Order {
  _id: string;
  productId: string;
  customerName: string;
  customerPhone: string;
  paymentMethod: string;
  createdAt: string;
}

interface Feedback {
  _id: string;
  customerName: string;
  message: string;
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin-login");
    }

    const fetchData = async () => {
      try {
        const headers = { adminPassword: process.env.REACT_APP_ADMIN_PASSWORD as string };

        const ordersRes = await instance.get("/orders", { headers });
        const feedbackRes = await instance.get("/feedback", { headers });

        setOrders(ordersRes.data as Order[]);
        setFeedbacks(feedbackRes.data as Feedback[]);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Orders</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul className="space-y-2">
            {orders.map((order: Order) => (
              <li key={order._id} className="border p-2 rounded">
                <p><strong>Name:</strong> {order.customerName}</p>
                <p><strong>Phone:</strong> {order.customerPhone}</p>
                <p><strong>Payment:</strong> {order.paymentMethod}</p>
                <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <ul className="space-y-2">
            {feedbacks.map((fb: Feedback) => (
              <li key={fb._id} className="border p-2 rounded">
                <p><strong>Name:</strong> {fb.customerName}</p>
                <p><strong>Message:</strong> {fb.message}</p>
                <p><strong>Date:</strong> {new Date(fb.createdAt).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;