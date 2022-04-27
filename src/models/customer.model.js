import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    defaulter: {
      type: Boolean,
      required: true,
    }
  }
)

export const CustomerModel = mongoose.model('Customer', customerSchema)