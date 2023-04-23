import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function createLead(name,status){
  return await client
    .db("crm")
    .collection("createLead")
    .insertOne({ name:name,status:status});
}
export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); // bcrypt.genSalt(no. of rounds)
  //console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  //console.log("hashedPassword", hashedPassword);
  return hashedPassword;
}

export async function createUser(username, hashedPassword ,firstName , lastName , userType) {
  return await client
    .db("crm")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword ,firstName:firstName , lastName:lastName ,userType:userType});
}

export async function getUserByName(username) {
  return await client
    .db("crm")
    .collection("users")
    .findOne({ username: username });
}
