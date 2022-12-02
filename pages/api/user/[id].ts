import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  if (typeof req.query.id !== "string")
    return res.status(400).end("Invalid Identifier");

  const user = await prisma.message.findFirst({
    where: { id: req.query.id },
  });

  res.status(200).json(user);
}
