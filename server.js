const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
require("dotenv").config();

const PORT = process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
