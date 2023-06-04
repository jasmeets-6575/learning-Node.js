import express from "express"
import { createJob, deleteJob, getAllJobs, getJob, updateJob } from "../controllers/jobs"


const router = express.Router()

router.route("/").post(createJob).get(getAllJobs)
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob)

export default router