import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../../prisma/client";

export default async function handler(req: any, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  const message = await prisma.message.findFirst({
    where: { id: req.messageID, chatRoomID: req.id },
  });

  if (!message) {
    return res.status(404).end();
  }

  res.status(200).json(message.content);
}
