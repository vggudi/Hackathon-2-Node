// import express from "express";
// const app = express();

// const PORT = 4000;
// app.get("/", function (request, response) {
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";
import { userRouter } from "./routes/users.js";
import { createLeadRouter } from "./routes/createlead.js";
dotenv.config();
// console.log(process.env)
const app = express();
app.use(cors());
const PORT = process.env.PORT;
// req => what is the req we sent to Server
// res => what we receive for the req we sent to server

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is Connected");
  return client;
}

export const client = await createConnection();

app.use(express.json());

//REST API endpoint
app.get("/", (req, res) => {
  res.send("Hello Everyone🥳🥳🥳🥳");
});


app.use("/users", userRouter);
app.use("", createLeadRouter);

app.listen(PORT, () => console.log("Server started on PORT ", PORT));
