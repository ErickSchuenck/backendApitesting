import express, { json } from "express";
import cors from "cors";
import router from "./src/routers/router.js";
const app = express();

//env file to keep sensitive info
import dotenv from "dotenv";
dotenv.config();

app.use(cors());
app.use(json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
