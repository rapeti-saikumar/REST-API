const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "please add contact name"],
    },
    Email: {
      type: String,
      required: [true, "please add contact Email Address"],
    },
    Phone_Number: {
      type: String,
      required: [true, "please add contact Number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
