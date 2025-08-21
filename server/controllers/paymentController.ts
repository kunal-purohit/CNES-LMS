import { Request, Response } from "express";
import crypto from "crypto";

import { OrderNew } from "../models/orderModel"; // Import your Order model or create it as needed
import { instance } from "../server";
import { Payment } from "../models/paymentModel";
import axios from "axios";

export const checkout = async (req: Request, res: Response): Promise<void> => {
  const { amount, userId, courseId, courseName, userName } = req.body;

  const options = {
    amount: Number(amount),
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);
    console.log("Order created (backend):", order);

    // Save the order details to the database
    const savedOrder =  await OrderNew.create({
      razorpay_order_id: order.id,
      userId,
      courseId,
      courseName,
      userName,
      amount: Number(amount),
    });

    console.log("Order saved to database:", savedOrder);

    res.status(200).json({
      amount: order.amount,
      id: order.id,
    });
  } catch (error) {
    const err = error as Error;
    console.error("Order creation error:", err.message);
    res.status(500).json({
      success: false,
      message: "Order creation failed",
      error: err.message,
    });
  }
};


export const paymentVerification = async (req: Request, res: Response): Promise<void> => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET as string)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      console.log("Searching for order:", razorpay_order_id);
      const order = await OrderNew.findOne({ razorpay_order_id });

      if (!order) {
        console.error("Order not found with ID:", razorpay_order_id);
        throw new Error("Order not found");
      }

      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userId: order.userId,
        courseId: order.courseId,
        courseName: order.courseName,
        userName: order.userName,
        amount: order.amount
      });

      await OrderNew.deleteOne({ razorpay_order_id });

      // Call addCourseToUser API
      await axios.post(`${process.env.BACKEND_API_URI}add-course`, {
        userId: order.userId,
        courseId: order.courseId,
      });

      res.redirect(`${process.env.CLIENT_URI}paymentsuccess?reference=${razorpay_payment_id}`);
    } catch (error: any) {
      console.error("Payment Verification Error:", error);
      res.status(500).json({
        success: false,
        message: "Payment verification failed",
        error: error.message,
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "Invalid signature",
    });
  }
};
