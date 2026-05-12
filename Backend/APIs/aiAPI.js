import exp from "express";
import mongoose from "mongoose";
import { verifyToken } from "../Middlewares/verifyToken.js";
import { ExpenseModel } from "../Models/expenseModel.js";
import { generateSuggestions } from "../Services/aiservice.js";

export const aiAPI = exp.Router();

aiAPI.get("/ai/suggestions", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    // 1. Get expense data
    const data = await ExpenseModel.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
          isActive: true
        }
      },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    // 2. Convert data → text
    let summary = data.map(d => `${d._id}: ${d.total}`).join(", ");

    // 3. Call Gemini AI service
    const suggestions = await generateSuggestions(summary);

    res.json({
      message: "AI Suggestions",
      payload: suggestions
    });

  } catch (error) {
    res.status(500).json({
      message: "Error",
      payload: error.message
    });
  }
});