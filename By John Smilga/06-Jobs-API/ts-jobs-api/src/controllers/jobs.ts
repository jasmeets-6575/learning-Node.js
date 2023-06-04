import { RequestHandler } from "express";

export const getAllJobs: RequestHandler = async (req, res) => {
  res.send("get all jobs");
};
export const getJob: RequestHandler = async (req, res) => {
  res.send("get single job");
};
export const createJob: RequestHandler = async (req, res) => {
  res.send(" job created");
};
export const updateJob: RequestHandler = async (req, res) => {
  res.send("job updated");
};
export const deleteJob: RequestHandler = async (req, res) => {
  res.send("job deleted");
};

