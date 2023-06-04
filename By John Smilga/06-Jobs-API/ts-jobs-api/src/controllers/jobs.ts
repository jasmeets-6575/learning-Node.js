import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequest } from "../errors/bad-request";
import { NotFound } from "../errors/not-found";
import { NextFunction, Response, Request } from "express";
import Jobs from "../models/Jobs";
import mongoose from "mongoose";

interface CustomRequest extends Request {
  user: {
    id: string;
    userId?: string;
    name?: string;
    username?: string;
    company?: string;
    position?: string;
    status?: string;
    createdBy?: mongoose.Types.ObjectId;
    createdAt?: mongoose.Types.ObjectId;
    updatedAt?: mongoose.Types.ObjectId;
  };
}

export const getAllJobs = async (req: CustomRequest, res: Response) => {
  const jobs = await Jobs.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

export const getJob = async (req: CustomRequest, res: Response) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Jobs.findOne({
    _id: jobId,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFound(`No job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

export const createJob = async (req: CustomRequest, res: Response) => {
  req.body.createdBy = req.user.userId;
  const job = await Jobs.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const updateJob = async (req: CustomRequest, res: Response) => {};

export const deleteJob = async (req: CustomRequest, res: Response) => {};
