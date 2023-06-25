import mongoose, { Document, Schema } from "mongoose";

interface SchemaInput extends Document {
  name: string;
  completed: Boolean;
}

const TaskSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<SchemaInput>("Task", TaskSchema);
