import { ResponseError, Supplier } from "interfaces/index";
import { NextApiRequest, NextApiResponse } from "next";
import { createSupplier } from "util/api";
const Database = require("@replit/database");
const db = new Database();

export default (async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Supplier | ResponseError>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    db.get("suppliers").then((value: Supplier) => {
      return res.status(200).json(value);
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
});
