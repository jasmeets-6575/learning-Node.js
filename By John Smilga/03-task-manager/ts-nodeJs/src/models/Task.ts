import mongoose, { Document, Schema } from "mongoose";

interface SchemaInput extends Document{
  name: string;
  completed: Boolean;
}

const TaskSchema:Schema = new mongoose.Schema({ name: String, completed: Boolean });

export default mongoose.model<SchemaInput>("Task", TaskSchema)