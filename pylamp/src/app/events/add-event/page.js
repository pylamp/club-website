"use client";
import React, { useState } from "react";

export default function AddEvent() {
    const [formData, setFormData] = useState({
        name: "",
        eventDate: "",
        img: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://property-management-server-chi.vercel.app/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Event added successfully!");
                setFormData({ name: "", eventDate: "", img: "", description: "" });
            } else {
                const errorData = await response.json();
                alert(`Failed to add event: ${errorData.message}`);
                console.error("Error response:", errorData);
            }
        } catch (error) {
            console.error("Error adding event:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 h-screen px-4">
            <h1 className="text-2xl font-bold text-center mb-6">Add New Event</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        Event Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium">
                        Event Date
                    </label>
                    <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="img" className="block text-sm font-medium">
                        Image Link
                    </label>
                    <input
                        type="url"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
