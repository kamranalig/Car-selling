import Car from "../models/Car.js";

export const submitCar = async (req, res) => {
  const { carModel, price, phone, city } = req.body;
  const images = req.files ? req.files.map((file) => file.path) : [];
  console.log(images);

  try {
    const car = new Car({
      userId: req.user,
      carModel,
      price,
      phone,
      city,
      images,
    });
    console.log(car);

    await car.save();
    res.status(201).json({ message: "Car submitted successfully", car });
  } catch (err) {
    res.status(500).send("Error while submitting car details", err);
  }
};
