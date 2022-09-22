import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan";
import userRouter from './Route/user.js'

const app = express()
//mongodb+srv://mern_project:<password>@cluster0.rhsvf.mongodb.net/?retryWrites=true&w=majority
app.use(morgan("dev"))
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/users', userRouter); // http://localhost:7000/users/signup


const MONGODB_URL = "mongodb+srv://mernstackAuth:t4SStIvpoCxIO5Uz@cluster0.stwreyt.mongodb.net/hello"
const port = 7000
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

  //to start a backend server run npm run dev.