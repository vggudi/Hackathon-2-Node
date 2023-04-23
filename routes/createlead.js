import express from "express";
import { createLead } from "../helper.js";
const router = express.Router();
router.post("/createlead", async (req, res) => {
    const { name,status } = req.body;
    const result = await createLead(name,status);
  console.log(result);
  res.send({result,message:"Lead Created"});
}
);
export const createLeadRouter = router;