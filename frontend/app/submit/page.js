"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../../components/InputField";
import ImageUpload from "../../components/ImageUpload";
import axios from "axios";

const SubmitPage = () => {
  const [formData, setFormData] = useState({
    carModel: "",
    price: "",
    phone: "",
    city: "",
    maxImages: 5,
    images: [],
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (files) => {
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("carModel", formData.carModel);
    data.append("price", formData.price);
    data.append("phone", formData.phone);
    data.append("city", formData.city);
    formData.images.forEach((file) => data.append("images", file));

    try {
      await axios.post("http://localhost:5000/api/car/submit", data);
      alert("Car submitted successfully!");
      router.push("/");
    } catch (err) {
      alert("Error submitting car details", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit Your Car</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Car Model"
          type="text"
          value={formData.carModel}
          onChange={(e) => handleInputChange(e)}
          name="carModel"
        />
        <InputField
          label="Price"
          type="number"
          value={formData.price}
          onChange={(e) => handleInputChange(e)}
          name="price"
        />
        <InputField
          label="Phone Number"
          type="text"
          value={formData.phone}
          onChange={(e) => handleInputChange(e)}
          name="phone"
        />
        <InputField
          label="City"
          type="text"
          value={formData.city}
          onChange={(e) => handleInputChange(e)}
          name="city"
        />
        <ImageUpload
          maxImages={formData.maxImages}
          onImagesChange={handleImageChange}
        />
        <button className="bg-green-500 text-white p-2 rounded w-full mt-4">
          Submit Car
        </button>
      </form>
    </div>
  );
};

export default SubmitPage;
