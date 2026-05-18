import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { userRoute } from "./APIs/userApi.js";
import { expenseRoute } from "./APIs/expensesAPI.js";
import { budgetRoute } from "./APIs/budgetAPI.js";
import { aiAPI } from "./APIs/aiAPI.js";

// load env variables
config();

const app = exp();


//  MIDDLEWARES

// body parser
app.use(exp.json());

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// cookie parser
app.use(cookieParser());


// ROUTES 

app.use("/user-api", userRoute);

app.use("/expense-api", expenseRoute);

app.use("/budget-api", budgetRoute);

app.use("/api", aiAPI);


//  ERROR HANDLER 

app.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: "Internal Server Error",
    payload: err.message,
  });
});


//DATABASE CONNECTION 

const connectDb = async () => {
  try {
    await connect(process.env.DB_URL);

    console.log("DB connection successful");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });

  } catch (err) {
    console.log("Error in DB Connection:", err);
  }
};

connectDb();