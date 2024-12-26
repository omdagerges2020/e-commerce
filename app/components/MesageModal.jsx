'use client'
import React, { useState } from "react";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";

const ChatModal = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message: ${message}\nFile: ${file ? file.name : "No file uploaded"}`);
    setMessage("");
    setFile(null);
  };

  return (
    <div className="relative">
      {/* أيقونة الرسائل */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 left-4 bg-black text-white p-3 rounded-full shadow-lg "
        >
          <AiOutlineMessage size={28} />
        </button>
      )}

      {/* الموديل (الشات) */}
      {isChatOpen && (
        <div className="fixed bottom-0 left-4 bg-white shadow-lg rounded-t-lg w-80">
          {/* الهيدر وعلامة الغلط */}
          <div className="bg-black text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>We are currently away...</span>
            <button onClick={toggleChat}>
              <AiOutlineClose size={24} />
            </button>
          </div>

          {/* الرسالة */}
          <div className="p-4">
            <div className="bg-gray-200 p-2 rounded-lg mb-4">
              Welcome to our chat! Let us know what you're looking for.
            </div>

            {/* فورم الشات */}
            <form onSubmit={handleSubmit} className="space-y-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a reply..."
                className="w-full p-2 border rounded focus:outline-none focus:ring"
                rows="3"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatModal;
