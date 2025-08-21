import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOrder extends Document {
  razorpay_order_id: string;
  userId: string;
  courseId: string;
  courseName: string;
  userName: string;
  amount: number;
  createdAt: Date;
}

const orderSchema: Schema<IOrder> = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
    unique: true, // Ensure unique order IDs
  },
  userId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: false,
    
  },
  userName: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expires: '60m' }, // Automatically delete documents after 60 minutes
  },
},{timestamps: true});


// Check if model already exists
const OrderNew: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export { OrderNew };
