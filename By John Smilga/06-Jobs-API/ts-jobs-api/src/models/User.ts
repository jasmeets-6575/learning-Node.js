import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Document, Schema, model } from "mongoose";
import jwt, { JwtPayload } from "jsonwebtoken";

interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  createJWT(): () => JwtPayload;
  comparePassword(arg:string): () => JwtPayload;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide name"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  const JWT_URI = process.env.JWT_SECRET;
  const JWT_PERIOD = process.env.JWT_LIFETIME;
  if (JWT_URI && JWT_PERIOD) {
    return jwt.sign({ userId: this._id, name: this.name }, JWT_URI, {
      expiresIn: JWT_PERIOD,
    });
  }
};

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model<IUser>("User", UserSchema);
