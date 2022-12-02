import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") return res.status(405).end();

  if (typeof req.query.id !== "string")
    return res.status(400).end("Invalid Identifier");

  prisma.message.delete({
    where: { id: req.query.id },
  });

  res.status(200);
}
