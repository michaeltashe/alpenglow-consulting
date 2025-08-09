import mongoose from "mongoose";

const { Schema, model } = mongoose;

const serviceRequestSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

const ServiceRequest = mongoose.models.ServiceRequest || model("ServiceRequest", serviceRequestSchema);
export default ServiceRequest;
