import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  userhandler: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
});

const Users = mongoose.model(`User`, userSchema);

export default Users;
