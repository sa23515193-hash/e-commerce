import React, { useState } from "react";
import axios from "../api/axiosInstance";

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      await axios.post("/feedback", { customerName: name, customerEmail: email, message });
      alert("Feedback sent to admin!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Error sending feedback");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Send Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email (optional)"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;