import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {
  createJobController,
  deleteJobController,
  getAllJobsController,
  jobStatsController,
  updateJobController,
} from "../controller/jobsController.js";

const router = express.Router();

//routes
//job - post
router.post("/create-job", userAuth, createJobController);

//jobs get
router.get("/get-job", userAuth, getAllJobsController);

//update jobs put || patch
router.patch("/update-job/:id", userAuth, updateJobController);

//delete jobs put || delete
router.delete("/delete-job/:id", userAuth, deleteJobController);

// jobs stat || get
router.get("/job-stats", userAuth, jobStatsController);

export default router;
