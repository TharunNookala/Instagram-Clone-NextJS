"use client"
import React, { useState } from 'react';

function ChatGPT() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        setMessages((prevMessages) => [...prevMessages, message]);
        e.target.message.value = '';
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow border p-4">
                {messages.map((message, index) => (
                    <div key={index} className="mb-2">
                        <span className="font-bold">User:</span> {message}
                    </div>
                ))}
            </div>
            <div className="p-4 text-stone-400">
                <form onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        name="message"
                        className="w-full border p-2"
                        placeholder="Type your message..."
                    />
                    <button
                        type="submit"
                        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Go &rarr;
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatGPT;
