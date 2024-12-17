import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  carModel: { type: String, required: true },
  price: { type: Number, required: true },
  phone: { type: String, required: true, length: 11 },
  city: { type: String, required: true },
  images: [String],
});

const Car = mongoose.model("Car", carSchema);
export default Car;
