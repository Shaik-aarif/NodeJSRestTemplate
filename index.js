import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import moduleRoute from "./module/routes/moduleRoutes.js";
dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());

const port = process.env.PORT || 5000; 

app.use(`${process.env.BASE_URL}/module`, moduleRoute);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);

})

