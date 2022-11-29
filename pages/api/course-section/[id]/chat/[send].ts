import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  if (typeof req.query.id !== "string")
    return res.status(400).end("Invalid Identifier");
  //Message is not saved as it is automatically posted into a chatRoom with the corresponding id.
  await prisma.message.create({
    data: {
      //message id is set automatically

      authorID: req.User.id,
      //Author should be set automatically with user id
      //updatedAt is set automatically and since we are creating a message and not changing it, we do not need to change it
      chatRoomID: req.query.id,
      //Chat room is set automatically with chatroom id
      content: req.body,
    },
  });
  res.status(200);
}
