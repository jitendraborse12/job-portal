//api documentation
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";

import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
//security package
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import connectDB from "./config/db.js";

//routes
import testRoute from "./routes/testRoute.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import jobsRoutes from "./routes/jobsRoute.js";
import swaggerJSDoc from "swagger-jsdoc";

//config
dotenv.config();
//mongodb connection
connectDB();

//swagger api config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "job portal application",
      description: "Node express.js job application",
    },
    servers: [
      {
        // url: "http://localhost:8080",
        url: "https://job-portal-eilu.onrender.com/"
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const spec = swaggerDoc(options);

const app = express();

//middleware
app.use(helmet(""));
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
app.use("/api/v1/test", testRoute);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);

//homeroute
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(spec));

//validation middleware
app.use(errorMiddleware);
//port
const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
  // console.log(`node server running in ${process.env.DEV_MODE} on port ${PORT}`);
});
