import { ResponseError, Supplier } from "interfaces/index";
import { NextApiRequest, NextApiResponse } from "next";
import { createSupplier } from "util/api";
const Database = require("@replit/database");
const db = new Database();

export default (async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Supplier | ResponseError>
) {
  const { name, logo, address } = req.body;
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" });
  }
  try {
    db.get("suppliers").then((value: Supplier) => {
      let newSupplier = {
        name,
        logo,
        address
      }
      db.set("suppliers", [...value, newSupplier]).then(() => {
        return res.status(200).json(newSupplier);
      })
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
});
